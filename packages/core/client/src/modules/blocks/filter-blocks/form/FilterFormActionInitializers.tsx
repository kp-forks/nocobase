/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { CompatibleSchemaInitializer } from '../../../../application/schema-initializer/CompatibleSchemaInitializer';

/**
 * @deprecated
 * use `filterFormActionInitializers` instead
 * 表单的操作配置
 */
export const filterFormActionInitializers_deprecated = new CompatibleSchemaInitializer({
  name: 'FilterFormActionInitializers',
  title: '{{t("Configure actions")}}',
  icon: 'SettingOutlined',
  items: [
    {
      type: 'itemGroup',
      title: '{{t("Enable actions")}}',
      name: 'enableActions',
      children: [
        {
          name: 'filter',
          title: '{{t("Filter")}}',
          Component: 'CreateFilterActionInitializer',
          schema: {
            'x-action-settings': {},
          },
        },
        {
          name: 'reset',
          title: '{{t("Reset")}}',
          Component: 'CreateResetActionInitializer',
          schema: {
            'x-action-settings': {},
          },
        },
      ],
    },
  ],
});

export const filterFormActionInitializers = new CompatibleSchemaInitializer(
  {
    name: 'filterForm:configureActions',
    title: '{{t("Configure actions")}}',
    icon: 'SettingOutlined',
    items: [
      {
        type: 'itemGroup',
        title: '{{t("Enable actions")}}',
        name: 'enableActions',
        children: [
          {
            name: 'filter',
            title: '{{t("Filter")}}',
            Component: 'CreateFilterActionInitializer',
            schema: {
              'x-action-settings': {},
            },
          },
          {
            name: 'reset',
            title: '{{t("Reset")}}',
            Component: 'CreateResetActionInitializer',
            schema: {
              'x-action-settings': {},
            },
          },
        ],
      },
    ],
  },
  filterFormActionInitializers_deprecated,
);
