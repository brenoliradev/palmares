/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

/**
 * Automatically generated by palmares on 2025-02-03T21:42:02.628Z
 */

import { models, actions } from '@palmares/databases';


export default {
  name: '002_default_auto_migration_1738618922628',
  database: 'default',
  dependsOn: 'create_palmares_migration_table',
  operations: [
    new actions.CreateModel(
      "Company",
      {
        id: models.fields.AutoField.new().primaryKey(true).allowNull(true).unique(true).dbIndex(true).databaseName("id").underscored(true).setCustomAttributes({}),
        name: models.fields.CharField.new({ maxLen: 255 }).primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("name").underscored(true).setCustomAttributes({}).allowBlank(false),
        isActive: models.fields.BooleanField.new().primaryKey(false).default(true).allowNull(false).unique(false).dbIndex(false).databaseName("is_active").underscored(true).setCustomAttributes({})
      },
      {
        abstract: false,
        underscored: true,
        tableName: "company",
        managed: true,
        ordering: [],
        indexes: [],
        databases: ["default"],
        customOptions: {}
      }
    ),
    new actions.CreateModel(
      "User",
      {
        id: models.fields.AutoField.new().primaryKey(true).allowNull(true).unique(true).dbIndex(true).databaseName("id").underscored(true).setCustomAttributes({}),
        firstName: models.fields.CharField.new({ maxLen: 255 }).primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("first_name").underscored(true).setCustomAttributes({}).allowBlank(false),
        email: models.fields.TextField.new().primaryKey(false).allowNull(true).unique(false).dbIndex(false).databaseName("email").underscored(true).setCustomAttributes({}).allowBlank(false),
        companyId: models.fields.ForeignKeyField.new({relatedTo: "Company", toField: "id", onDelete: models.fields.ON_DELETE.CASCADE, relationName: "company", relatedName: "usersOfCompany"}).primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("company_id").underscored(true).setCustomAttributes({})
      },
      {
        abstract: false,
        underscored: true,
        tableName: "user",
        managed: true,
        ordering: [],
        indexes: [],
        databases: ["default"],
        customOptions: {}
      }
    )
  ]
};
