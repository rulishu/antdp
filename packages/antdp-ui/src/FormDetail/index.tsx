import React, { forwardRef } from 'react';
import { Descriptions, Tooltip, DescriptionsProps } from 'antd';
import { QuickFormProps } from '../QuickForm'
import QucikFrom from '../QuickForm'
import UploadContent from './uploadContent'
import moment from 'moment';

interface FormDetailProps extends QuickFormProps<any> {
  isView: boolean;
  bordered: boolean | undefined;
  layout?: 'horizontal' | 'vertical';
  style?: object
  otherDescriptions?: DescriptionsProps
}

type FormDetailComponent = (
  props: FormDetailProps,
  ref?: any
) => React.ReactElement

const FormDetail: FormDetailComponent = (props, ref) => {
  const {
    formDatas = [],
    isView = false,
    header = '',
    type,
    colspan,
    style,
    layout = 'horizontal',
    bordered = true,
    otherDescriptions = {},
    ...others
  } = props

  return (
    <div style={style}>
      {' '}
      {isView ? (
        <Descriptions
          {...otherDescriptions}
          title={header}
          bordered={bordered}
          size="small"
          style={{ marginBottom: 24 }}
          column={colspan}
          layout={layout}
        >
          {formDatas.map((item, idx) => {
            let newOptions = item?.options || []
            let content: any;
            if (item.type === 'UploadGrid' || type === 'uploadGrid') {
              content = <UploadContent item={item} />
            } else if (item.type === 'radio') {
              let value = newOptions.filter((itm: { value: any; }) => itm.value === item.initialValue);
              content = value && value.length > 0 && value[0].label || '';
            } else if (typeof item.initialValue === 'object' && moment.isMoment(item.initialValue)) {
              content = item.initialValue.format('YYYY-MM-DD');
            } else if (item.type === 'rangePicker') {
              if (item.initialValue) {
                item.initialValue.forEach((date: { format: (arg0: string) => string; }) => {
                  if (date) {
                    content += date.format('YYYY-MM-DD HH:mm:ss');
                  }
                })
              }
            } else if (item.type === 'checkbox') {
              const values = item.initialValue;
              for (const itm of newOptions) {
                if (values.includes(itm.value)) {
                  content += `${itm.label} `;
                }
              }
            } else if (item.type === 'cascader') {
              const values = item.initialValue;
              content = values ? values.join('') : '';
            } else if (item.type === 'selectRange') {
              const values = item.initialValue;
              content = values && values.length === 2 ? `${values[0]}头${values[1]}挂` : '';
            } else if (item.type === 'select') {
              if (item.attributes && item.attributes.labelInValue) {
                content = item.initialValue && item.initialValue.label;
              } else {
                if (newOptions.length > 0) {
                  let selObj = newOptions.find((itm: { value: any; }) => itm.value === item.initialValue);
                  content = selObj ? selObj.label : item.initialValue;
                } else {
                  content = item.initialValue;
                }
                if (item.attributes && item.attributes.mode === 'multiple') {
                  content = (item.initialValue && item.initialValue.join(' ')) || '';
                }
              }
            } else {
              content =
                typeof item.initialValue === 'object'
                  ? item.initialValue && item.initialValue.label
                  : item.initialValue;
            }
            return (
              !item.hideInForm && (
                <Descriptions.Item key={item.name + idx} label={item.label} span={item.span}>
                  {item.attributes && item.attributes.isTooltip ? (
                    <Tooltip title={content}>
                      <div style={item.attributes && item.attributes.style}>
                        {' '}
                        {content}
                        {item.attributes && item.attributes.addonAfter}
                      </div>
                    </Tooltip>
                  ) : (
                    <div style={item.attributes && item.attributes.style}>
                      {' '}
                      {content}
                      {item.attributes && item.attributes.addonAfter}
                    </div>
                  )}
                </Descriptions.Item>
              )
            );
          })}
        </Descriptions>
      ) : (
        <QucikFrom
          {...others}
          size="default"
          defaultFormLayout="vertical"
          header={header}
          formDatas={formDatas}
          colspan={colspan}
          type={type}
          ref={ref}
        />
      )}
    </div>
  );
}

export default forwardRef(FormDetail);