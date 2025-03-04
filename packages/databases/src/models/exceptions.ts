export class ModelNoUniqueFieldsError extends Error {
  constructor(modelName: string) {
    super(
      `Model ${modelName} has no unique fields, it should have at least one unique field. ` +
        `If it's an abstract model, you need to set "abstract" to true in the model options.`
    );
    this.name = ModelNoUniqueFieldsError.name;
  }
}

/**
 * The Primary key is required, because we do relations in memory.
 * Without that for some databases/orms it would not behave as expected.
 */
export class ModelNoPrimaryKeyFieldError extends Error {
  constructor(modelName: string) {
    super(
      `Model ${modelName} has no primary key field, it should have at least one primary key. ` +
        `If it's an abstract model, you need to set "abstract" to true in the model options.`
    );
    this.name = ModelNoPrimaryKeyFieldError.name;
  }
}

export class ModelCircularAbstractError extends Error {
  constructor(originalModelName: string, abstractModelName: string) {
    super(`Model ${originalModelName} have a circular abstract dependency with ${abstractModelName}`);
  }
}

export class ModelInvalidAbstractFieldError extends Error {
  constructor(modelName: string, abstractModelName: string, fieldName: string) {
    super(
      `The abstract model '${abstractModelName}' already have a field named '${fieldName}', ` +
        `please rename the field ${fieldName} in the '${modelName}' model or remove the abstract`
    );
  }
}

export class ModelInvalidAbstractManagerError extends Error {
  constructor(modelName: string, abstractModelName: string, managerName: string) {
    super(
      `The abstract model ${abstractModelName} already have a manager named ${managerName}, ` +
        `please rename the manager '${managerName}' in the ${modelName} model`
    );
    this.name = ModelInvalidAbstractManagerError.name;
  }
}

export class ManagerEngineInstanceNotFoundError extends Error {
  constructor(engineName: string) {
    super(
      `The engine ${engineName} is not found in the manager. Make sure that this model is available for that engine.`
    );
    this.name = ManagerEngineInstanceNotFoundError.name;
  }
}

export class ShouldAssignAllInstancesException extends Error {
  constructor() {
    super(
      'You have translated the model before. And you have assigned `instance` to the model options.' +
        ' You should assign `instance` to all model options.'
    );
    this.name = ShouldAssignAllInstancesException.name;
  }
}

export class EngineDoesNotSupportFieldTypeException extends Error {
  constructor(engineName: string, fieldType: string) {
    super(
      `The engine '${engineName}' does not support the field of type: '${fieldType}'.` +
        ` If you are using a custom field, make sure that you are using the 'TranslatableField' class.`
    );
    this.name = EngineDoesNotSupportFieldTypeException.name;
  }
}

export class RelatedModelFromForeignKeyIsNotFromEngineException extends Error {
  constructor(
    engineName: string,
    modelName: string,
    foreignKeyFieldName: string,
    foreignKeyFieldModelName: string,
    fieldName: string
  ) {
    super(
      `The related model '${modelName}' from the foreign key field '${foreignKeyFieldName}' of the ` +
        `model '${foreignKeyFieldModelName}' is not from the engine '${engineName}' that is ` +
        `being used. This is not a problem, but you need to make sure that the field '${fieldName}' it is ` +
        `relating to exists on the model '${modelName}' it is related to.`
    );
    this.name = RelatedModelFromForeignKeyIsNotFromEngineException.name;
  }
}

export class MissingWhereClauseException extends Error {
  constructor(fun: string) {
    super(
      `You must provide a '.where()' clause query to update a model or use 'force' as true on the '.${fun}()' action.`
    );
    this.name = MissingWhereClauseException.name;
  }
}

export class ModelMissingException extends Error {
  constructor(modelName: string) {
    super(`The model ${modelName} was not found in the engine.`);
    this.name = ModelMissingException.name;
  }
}

export class FieldFromModelMissingException extends Error {
  constructor(modelName: string, fieldName: string) {
    super(`The field ${fieldName} was not found in the model ${modelName}.`);
    this.name = FieldFromModelMissingException.name;
  }
}
