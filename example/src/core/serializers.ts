import {
  Serializer,
  OutSerializerType,
  StringField,
  ModelSerializer,
} from '@palmares/serializers';
import { Post, User } from './models';

export class UserSerializer extends ModelSerializer {
  fields = {
    userPosts: PostSerializer.new({
      isDynamicRepresentation: true,
      many: true,
    }),
  };

  options = {
    model: User,
    excludes: ['password'] as const,
  };
}

export class PostSerializer extends ModelSerializer {
  options = {
    model: Post,
    excludes: ['id', 'userUuid'] as const,
  };
}

class NestedSerializer extends Serializer {
  async toRepresentation(data: OutSerializerType<NestedSerializer>[]) {
    return data;
  }

  fields = {
    phoneNumber: StringField.new(),
  };
}

export class ExampleSerializer extends Serializer {
  async toRepresentation(data: OutSerializerType<NestedSerializer>[]) {
    return data;
  }

  fields = {
    firstName: StringField.new({
      defaultValue: 'string',
      allowNull: false,
      writeOnly: true,
      required: false,
    }),
    lastName: StringField.new({ readOnly: true, allowNull: true }),
    nested: NestedSerializer.new({ allowNull: false }),
  };
}
