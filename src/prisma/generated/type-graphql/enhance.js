"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyArgsTypesEnhanceMap = exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const crudResolvers = __importStar(require("./resolvers/crud/resolvers-crud.index"));
const actionResolvers = __importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = __importStar(require("./resolvers/relations/resolvers.index"));
const models = __importStar(require("./models"));
const outputTypes = __importStar(require("./resolvers/outputs"));
const inputTypes = __importStar(require("./resolvers/inputs"));
const argsTypes = __importStar(require("./resolvers/crud/args.index"));
const crudResolversMap = {
    Restaurants: crudResolvers.RestaurantsCrudResolver,
    Bars: crudResolvers.BarsCrudResolver,
    Upload_file: crudResolvers.Upload_fileCrudResolver,
    Upload_file_morph: crudResolvers.Upload_file_morphCrudResolver
};
const relationResolversMap = {
    Restaurants: relationResolvers.RestaurantsRelationsResolver,
    Bars: relationResolvers.BarsRelationsResolver,
    Upload_file: relationResolvers.Upload_fileRelationsResolver,
    Upload_file_morph: relationResolvers.Upload_file_morphRelationsResolver
};
const actionResolversMap = {
    Restaurants: {
        findUniqueRestaurants: actionResolvers.FindUniqueRestaurantsResolver,
        findFirstRestaurants: actionResolvers.FindFirstRestaurantsResolver,
        findManyRestaurants: actionResolvers.FindManyRestaurantsResolver,
        createRestaurants: actionResolvers.CreateRestaurantsResolver,
        createManyRestaurants: actionResolvers.CreateManyRestaurantsResolver,
        deleteRestaurants: actionResolvers.DeleteRestaurantsResolver,
        updateRestaurants: actionResolvers.UpdateRestaurantsResolver,
        deleteManyRestaurants: actionResolvers.DeleteManyRestaurantsResolver,
        updateManyRestaurants: actionResolvers.UpdateManyRestaurantsResolver,
        upsertRestaurants: actionResolvers.UpsertRestaurantsResolver,
        aggregateRestaurants: actionResolvers.AggregateRestaurantsResolver,
        groupByRestaurants: actionResolvers.GroupByRestaurantsResolver
    },
    Bars: {
        findUniqueBars: actionResolvers.FindUniqueBarsResolver,
        findFirstBars: actionResolvers.FindFirstBarsResolver,
        findManyBars: actionResolvers.FindManyBarsResolver,
        createBars: actionResolvers.CreateBarsResolver,
        createManyBars: actionResolvers.CreateManyBarsResolver,
        deleteBars: actionResolvers.DeleteBarsResolver,
        updateBars: actionResolvers.UpdateBarsResolver,
        deleteManyBars: actionResolvers.DeleteManyBarsResolver,
        updateManyBars: actionResolvers.UpdateManyBarsResolver,
        upsertBars: actionResolvers.UpsertBarsResolver,
        aggregateBars: actionResolvers.AggregateBarsResolver,
        groupByBars: actionResolvers.GroupByBarsResolver
    },
    Upload_file: {
        upload_file: actionResolvers.FindUniqueUpload_fileResolver,
        findFirstUpload_file: actionResolvers.FindFirstUpload_fileResolver,
        upload_files: actionResolvers.FindManyUpload_fileResolver,
        createUpload_file: actionResolvers.CreateUpload_fileResolver,
        createManyUpload_file: actionResolvers.CreateManyUpload_fileResolver,
        deleteUpload_file: actionResolvers.DeleteUpload_fileResolver,
        updateUpload_file: actionResolvers.UpdateUpload_fileResolver,
        deleteManyUpload_file: actionResolvers.DeleteManyUpload_fileResolver,
        updateManyUpload_file: actionResolvers.UpdateManyUpload_fileResolver,
        upsertUpload_file: actionResolvers.UpsertUpload_fileResolver,
        aggregateUpload_file: actionResolvers.AggregateUpload_fileResolver,
        groupByUpload_file: actionResolvers.GroupByUpload_fileResolver
    },
    Upload_file_morph: {
        upload_file_morph: actionResolvers.FindUniqueUpload_file_morphResolver,
        findFirstUpload_file_morph: actionResolvers.FindFirstUpload_file_morphResolver,
        upload_file_morphs: actionResolvers.FindManyUpload_file_morphResolver,
        createUpload_file_morph: actionResolvers.CreateUpload_file_morphResolver,
        createManyUpload_file_morph: actionResolvers.CreateManyUpload_file_morphResolver,
        deleteUpload_file_morph: actionResolvers.DeleteUpload_file_morphResolver,
        updateUpload_file_morph: actionResolvers.UpdateUpload_file_morphResolver,
        deleteManyUpload_file_morph: actionResolvers.DeleteManyUpload_file_morphResolver,
        updateManyUpload_file_morph: actionResolvers.UpdateManyUpload_file_morphResolver,
        upsertUpload_file_morph: actionResolvers.UpsertUpload_file_morphResolver,
        aggregateUpload_file_morph: actionResolvers.AggregateUpload_file_morphResolver,
        groupByUpload_file_morph: actionResolvers.GroupByUpload_file_morphResolver
    }
};
const resolversInfo = {
    Restaurants: ["findUniqueRestaurants", "findFirstRestaurants", "findManyRestaurants", "createRestaurants", "createManyRestaurants", "deleteRestaurants", "updateRestaurants", "deleteManyRestaurants", "updateManyRestaurants", "upsertRestaurants", "aggregateRestaurants", "groupByRestaurants"],
    Bars: ["findUniqueBars", "findFirstBars", "findManyBars", "createBars", "createManyBars", "deleteBars", "updateBars", "deleteManyBars", "updateManyBars", "upsertBars", "aggregateBars", "groupByBars"],
    Upload_file: ["upload_file", "findFirstUpload_file", "upload_files", "createUpload_file", "createManyUpload_file", "deleteUpload_file", "updateUpload_file", "deleteManyUpload_file", "updateManyUpload_file", "upsertUpload_file", "aggregateUpload_file", "groupByUpload_file"],
    Upload_file_morph: ["upload_file_morph", "findFirstUpload_file_morph", "upload_file_morphs", "createUpload_file_morph", "createManyUpload_file_morph", "deleteUpload_file_morph", "updateUpload_file_morph", "deleteManyUpload_file_morph", "updateManyUpload_file_morph", "upsertUpload_file_morph", "aggregateUpload_file_morph", "groupByUpload_file_morph"]
};
const relationResolversInfo = {
    Restaurants: ["image"],
    Bars: ["image"],
    Upload_file: ["image"],
    Upload_file_morph: ["image", "bars", "restaurants"]
};
const modelsInfo = {
    Restaurants: ["id", "title", "description", "lat", "lon", "suburb", "city", "postCode", "published_at", "created_by", "updated_by", "created_at", "updated_at", "breakfast", "lunch", "dinner", "bachelorParty", "henParty"],
    Bars: ["id", "title", "description", "suburb", "city", "postCode", "lat", "lon", "breakfast", "lunch", "dinner", "bachelorParty", "henParty", "visible", "published_at", "created_by", "updated_by", "created_at", "updated_at"],
    Upload_file: ["id", "name", "alternativeText", "caption", "width", "height", "formats", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "provider_metadata", "created_by", "updated_by", "created_at", "updated_at"],
    Upload_file_morph: ["upload_file_id", "related_id", "related_type", "field", "order"]
};
const inputsInfo = {
    RestaurantsWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "lat", "lon", "suburb", "city", "postCode", "published_at", "created_by", "updated_by", "created_at", "updated_at", "breakfast", "lunch", "dinner", "bachelorParty", "henParty", "image"],
    RestaurantsOrderByInput: ["id", "title", "description", "lat", "lon", "suburb", "city", "postCode", "published_at", "created_by", "updated_by", "created_at", "updated_at", "breakfast", "lunch", "dinner", "bachelorParty", "henParty"],
    RestaurantsWhereUniqueInput: ["id"],
    RestaurantsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "lat", "lon", "suburb", "city", "postCode", "published_at", "created_by", "updated_by", "created_at", "updated_at", "breakfast", "lunch", "dinner", "bachelorParty", "henParty"],
    BarsWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "suburb", "city", "postCode", "lat", "lon", "breakfast", "lunch", "dinner", "bachelorParty", "henParty", "visible", "published_at", "created_by", "updated_by", "created_at", "updated_at", "image"],
    BarsOrderByInput: ["id", "title", "description", "suburb", "city", "postCode", "lat", "lon", "breakfast", "lunch", "dinner", "bachelorParty", "henParty", "visible", "published_at", "created_by", "updated_by", "created_at", "updated_at"],
    BarsWhereUniqueInput: ["id"],
    BarsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "suburb", "city", "postCode", "lat", "lon", "breakfast", "lunch", "dinner", "bachelorParty", "henParty", "visible", "published_at", "created_by", "updated_by", "created_at", "updated_at"],
    Upload_fileWhereInput: ["AND", "OR", "NOT", "id", "name", "alternativeText", "caption", "width", "height", "formats", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "provider_metadata", "created_by", "updated_by", "created_at", "updated_at", "image"],
    Upload_fileOrderByInput: ["id", "name", "alternativeText", "caption", "width", "height", "formats", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "provider_metadata", "created_by", "updated_by", "created_at", "updated_at"],
    Upload_fileWhereUniqueInput: ["id"],
    Upload_fileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "alternativeText", "caption", "width", "height", "formats", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "provider_metadata", "created_by", "updated_by", "created_at", "updated_at"],
    Upload_file_morphWhereInput: ["AND", "OR", "NOT", "upload_file_id", "related_id", "related_type", "field", "order", "image", "bars", "restaurants"],
    Upload_file_morphOrderByInput: ["upload_file_id", "related_id", "related_type", "field", "order"],
    Upload_file_morphWhereUniqueInput: ["upload_file_id_related_id"],
    Upload_file_morphScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "upload_file_id", "related_id", "related_type", "field", "order"],
    RestaurantsCreateInput: ["title", "description", "lat", "lon", "suburb", "city", "postCode", "published_at", "created_by", "updated_by", "created_at", "updated_at", "breakfast", "lunch", "dinner", "bachelorParty", "henParty", "image"],
    RestaurantsUpdateInput: ["title", "description", "lat", "lon", "suburb", "city", "postCode", "published_at", "created_by", "updated_by", "created_at", "updated_at", "breakfast", "lunch", "dinner", "bachelorParty", "henParty", "image"],
    RestaurantsCreateManyInput: ["id", "title", "description", "lat", "lon", "suburb", "city", "postCode", "published_at", "created_by", "updated_by", "created_at", "updated_at", "breakfast", "lunch", "dinner", "bachelorParty", "henParty"],
    RestaurantsUpdateManyMutationInput: ["title", "description", "lat", "lon", "suburb", "city", "postCode", "published_at", "created_by", "updated_by", "created_at", "updated_at", "breakfast", "lunch", "dinner", "bachelorParty", "henParty"],
    BarsCreateInput: ["title", "description", "suburb", "city", "postCode", "lat", "lon", "breakfast", "lunch", "dinner", "bachelorParty", "henParty", "visible", "published_at", "created_by", "updated_by", "created_at", "updated_at", "image"],
    BarsUpdateInput: ["title", "description", "suburb", "city", "postCode", "lat", "lon", "breakfast", "lunch", "dinner", "bachelorParty", "henParty", "visible", "published_at", "created_by", "updated_by", "created_at", "updated_at", "image"],
    BarsCreateManyInput: ["id", "title", "description", "suburb", "city", "postCode", "lat", "lon", "breakfast", "lunch", "dinner", "bachelorParty", "henParty", "visible", "published_at", "created_by", "updated_by", "created_at", "updated_at"],
    BarsUpdateManyMutationInput: ["title", "description", "suburb", "city", "postCode", "lat", "lon", "breakfast", "lunch", "dinner", "bachelorParty", "henParty", "visible", "published_at", "created_by", "updated_by", "created_at", "updated_at"],
    Upload_fileCreateInput: ["name", "alternativeText", "caption", "width", "height", "formats", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "provider_metadata", "created_by", "updated_by", "created_at", "updated_at", "image"],
    Upload_fileUpdateInput: ["name", "alternativeText", "caption", "width", "height", "formats", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "provider_metadata", "created_by", "updated_by", "created_at", "updated_at", "image"],
    Upload_fileCreateManyInput: ["id", "name", "alternativeText", "caption", "width", "height", "formats", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "provider_metadata", "created_by", "updated_by", "created_at", "updated_at"],
    Upload_fileUpdateManyMutationInput: ["name", "alternativeText", "caption", "width", "height", "formats", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "provider_metadata", "created_by", "updated_by", "created_at", "updated_at"],
    Upload_file_morphCreateInput: ["related_type", "field", "order", "image", "bars", "restaurants"],
    Upload_file_morphUpdateInput: ["related_type", "field", "order", "image", "bars", "restaurants"],
    Upload_file_morphCreateManyInput: ["upload_file_id", "related_id", "related_type", "field", "order"],
    Upload_file_morphUpdateManyMutationInput: ["related_type", "field", "order"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    FloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    BoolNullableFilter: ["equals", "not"],
    Upload_file_morphRelationFilter: ["is", "isNot"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    FloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    BoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    JsonNullableFilter: ["equals", "not"],
    DecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    JsonNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    DecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    Upload_fileRelationFilter: ["is", "isNot"],
    BarsRelationFilter: ["is", "isNot"],
    RestaurantsRelationFilter: ["is", "isNot"],
    upload_file_morphUpload_file_idRelated_idCompoundUniqueInput: ["upload_file_id", "related_id"],
    Upload_file_morphCreateNestedOneWithoutRestaurantsInput: ["create", "connectOrCreate", "connect"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    NullableFloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    NullableBoolFieldUpdateOperationsInput: ["set"],
    Upload_file_morphUpdateOneWithoutRestaurantsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    Upload_file_morphCreateNestedOneWithoutBarsInput: ["create", "connectOrCreate", "connect"],
    Upload_file_morphUpdateOneWithoutBarsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    Upload_file_morphCreateNestedOneWithoutImageInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    DecimalFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    Upload_file_morphUpdateOneWithoutImageInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    Upload_fileCreateNestedOneWithoutImageInput: ["create", "connectOrCreate", "connect"],
    BarsCreateNestedOneWithoutImageInput: ["create", "connectOrCreate", "connect"],
    RestaurantsCreateNestedOneWithoutImageInput: ["create", "connectOrCreate", "connect"],
    Upload_fileUpdateOneRequiredWithoutImageInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    BarsUpdateOneRequiredWithoutImageInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    RestaurantsUpdateOneRequiredWithoutImageInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedBoolNullableFilter: ["equals", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedFloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedBoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedJsonNullableFilter: ["equals", "not"],
    NestedDecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    Upload_file_morphCreateWithoutRestaurantsInput: ["related_type", "field", "order", "image", "bars"],
    Upload_file_morphCreateOrConnectWithoutRestaurantsInput: ["where", "create"],
    Upload_file_morphUpsertWithoutRestaurantsInput: ["update", "create"],
    Upload_file_morphUpdateWithoutRestaurantsInput: ["related_type", "field", "order", "image", "bars"],
    Upload_file_morphCreateWithoutBarsInput: ["related_type", "field", "order", "image", "restaurants"],
    Upload_file_morphCreateOrConnectWithoutBarsInput: ["where", "create"],
    Upload_file_morphUpsertWithoutBarsInput: ["update", "create"],
    Upload_file_morphUpdateWithoutBarsInput: ["related_type", "field", "order", "image", "restaurants"],
    Upload_file_morphCreateWithoutImageInput: ["related_type", "field", "order", "bars", "restaurants"],
    Upload_file_morphCreateOrConnectWithoutImageInput: ["where", "create"],
    Upload_file_morphUpsertWithoutImageInput: ["update", "create"],
    Upload_file_morphUpdateWithoutImageInput: ["related_type", "field", "order", "bars", "restaurants"],
    Upload_fileCreateWithoutImageInput: ["name", "alternativeText", "caption", "width", "height", "formats", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "provider_metadata", "created_by", "updated_by", "created_at", "updated_at"],
    Upload_fileCreateOrConnectWithoutImageInput: ["where", "create"],
    BarsCreateWithoutImageInput: ["title", "description", "suburb", "city", "postCode", "lat", "lon", "breakfast", "lunch", "dinner", "bachelorParty", "henParty", "visible", "published_at", "created_by", "updated_by", "created_at", "updated_at"],
    BarsCreateOrConnectWithoutImageInput: ["where", "create"],
    RestaurantsCreateWithoutImageInput: ["title", "description", "lat", "lon", "suburb", "city", "postCode", "published_at", "created_by", "updated_by", "created_at", "updated_at", "breakfast", "lunch", "dinner", "bachelorParty", "henParty"],
    RestaurantsCreateOrConnectWithoutImageInput: ["where", "create"],
    Upload_fileUpsertWithoutImageInput: ["update", "create"],
    Upload_fileUpdateWithoutImageInput: ["name", "alternativeText", "caption", "width", "height", "formats", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "provider_metadata", "created_by", "updated_by", "created_at", "updated_at"],
    BarsUpsertWithoutImageInput: ["update", "create"],
    BarsUpdateWithoutImageInput: ["title", "description", "suburb", "city", "postCode", "lat", "lon", "breakfast", "lunch", "dinner", "bachelorParty", "henParty", "visible", "published_at", "created_by", "updated_by", "created_at", "updated_at"],
    RestaurantsUpsertWithoutImageInput: ["update", "create"],
    RestaurantsUpdateWithoutImageInput: ["title", "description", "lat", "lon", "suburb", "city", "postCode", "published_at", "created_by", "updated_by", "created_at", "updated_at", "breakfast", "lunch", "dinner", "bachelorParty", "henParty"]
};
const outputsInfo = {
    AggregateRestaurants: ["_count", "_avg", "_sum", "_min", "_max"],
    RestaurantsGroupBy: ["id", "title", "description", "lat", "lon", "suburb", "city", "postCode", "published_at", "created_by", "updated_by", "created_at", "updated_at", "breakfast", "lunch", "dinner", "bachelorParty", "henParty", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateBars: ["_count", "_avg", "_sum", "_min", "_max"],
    BarsGroupBy: ["id", "title", "description", "suburb", "city", "postCode", "lat", "lon", "breakfast", "lunch", "dinner", "bachelorParty", "henParty", "visible", "published_at", "created_by", "updated_by", "created_at", "updated_at", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateUpload_file: ["_count", "_avg", "_sum", "_min", "_max"],
    Upload_fileGroupBy: ["id", "name", "alternativeText", "caption", "width", "height", "formats", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "provider_metadata", "created_by", "updated_by", "created_at", "updated_at", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateUpload_file_morph: ["_count", "_avg", "_sum", "_min", "_max"],
    Upload_file_morphGroupBy: ["upload_file_id", "related_id", "related_type", "field", "order", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    RestaurantsCountAggregate: ["id", "title", "description", "lat", "lon", "suburb", "city", "postCode", "published_at", "created_by", "updated_by", "created_at", "updated_at", "breakfast", "lunch", "dinner", "bachelorParty", "henParty", "_all"],
    RestaurantsAvgAggregate: ["id", "lat", "lon", "postCode", "created_by", "updated_by"],
    RestaurantsSumAggregate: ["id", "lat", "lon", "postCode", "created_by", "updated_by"],
    RestaurantsMinAggregate: ["id", "title", "description", "lat", "lon", "suburb", "city", "postCode", "published_at", "created_by", "updated_by", "created_at", "updated_at", "breakfast", "lunch", "dinner", "bachelorParty", "henParty"],
    RestaurantsMaxAggregate: ["id", "title", "description", "lat", "lon", "suburb", "city", "postCode", "published_at", "created_by", "updated_by", "created_at", "updated_at", "breakfast", "lunch", "dinner", "bachelorParty", "henParty"],
    BarsCountAggregate: ["id", "title", "description", "suburb", "city", "postCode", "lat", "lon", "breakfast", "lunch", "dinner", "bachelorParty", "henParty", "visible", "published_at", "created_by", "updated_by", "created_at", "updated_at", "_all"],
    BarsAvgAggregate: ["id", "lat", "lon", "created_by", "updated_by"],
    BarsSumAggregate: ["id", "lat", "lon", "created_by", "updated_by"],
    BarsMinAggregate: ["id", "title", "description", "suburb", "city", "postCode", "lat", "lon", "breakfast", "lunch", "dinner", "bachelorParty", "henParty", "visible", "published_at", "created_by", "updated_by", "created_at", "updated_at"],
    BarsMaxAggregate: ["id", "title", "description", "suburb", "city", "postCode", "lat", "lon", "breakfast", "lunch", "dinner", "bachelorParty", "henParty", "visible", "published_at", "created_by", "updated_by", "created_at", "updated_at"],
    Upload_fileCountAggregate: ["id", "name", "alternativeText", "caption", "width", "height", "formats", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "provider_metadata", "created_by", "updated_by", "created_at", "updated_at", "_all"],
    Upload_fileAvgAggregate: ["id", "width", "height", "size", "created_by", "updated_by"],
    Upload_fileSumAggregate: ["id", "width", "height", "size", "created_by", "updated_by"],
    Upload_fileMinAggregate: ["id", "name", "alternativeText", "caption", "width", "height", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "created_by", "updated_by", "created_at", "updated_at"],
    Upload_fileMaxAggregate: ["id", "name", "alternativeText", "caption", "width", "height", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "created_by", "updated_by", "created_at", "updated_at"],
    Upload_file_morphCountAggregate: ["upload_file_id", "related_id", "related_type", "field", "order", "_all"],
    Upload_file_morphAvgAggregate: ["upload_file_id", "related_id", "order"],
    Upload_file_morphSumAggregate: ["upload_file_id", "related_id", "order"],
    Upload_file_morphMinAggregate: ["upload_file_id", "related_id", "related_type", "field", "order"],
    Upload_file_morphMaxAggregate: ["upload_file_id", "related_id", "related_type", "field", "order"]
};
const argsInfo = {
    FindUniqueRestaurantsArgs: ["where"],
    FindFirstRestaurantsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyRestaurantsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateRestaurantsArgs: ["data"],
    CreateManyRestaurantsArgs: ["data", "skipDuplicates"],
    DeleteRestaurantsArgs: ["where"],
    UpdateRestaurantsArgs: ["data", "where"],
    DeleteManyRestaurantsArgs: ["where"],
    UpdateManyRestaurantsArgs: ["data", "where"],
    UpsertRestaurantsArgs: ["where", "create", "update"],
    AggregateRestaurantsArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByRestaurantsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueBarsArgs: ["where"],
    FindFirstBarsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyBarsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateBarsArgs: ["data"],
    CreateManyBarsArgs: ["data", "skipDuplicates"],
    DeleteBarsArgs: ["where"],
    UpdateBarsArgs: ["data", "where"],
    DeleteManyBarsArgs: ["where"],
    UpdateManyBarsArgs: ["data", "where"],
    UpsertBarsArgs: ["where", "create", "update"],
    AggregateBarsArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByBarsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueUpload_fileArgs: ["where"],
    FindFirstUpload_fileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUpload_fileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateUpload_fileArgs: ["data"],
    CreateManyUpload_fileArgs: ["data", "skipDuplicates"],
    DeleteUpload_fileArgs: ["where"],
    UpdateUpload_fileArgs: ["data", "where"],
    DeleteManyUpload_fileArgs: ["where"],
    UpdateManyUpload_fileArgs: ["data", "where"],
    UpsertUpload_fileArgs: ["where", "create", "update"],
    AggregateUpload_fileArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByUpload_fileArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueUpload_file_morphArgs: ["where"],
    FindFirstUpload_file_morphArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUpload_file_morphArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateUpload_file_morphArgs: ["data"],
    CreateManyUpload_file_morphArgs: ["data", "skipDuplicates"],
    DeleteUpload_file_morphArgs: ["where"],
    UpdateUpload_file_morphArgs: ["data", "where"],
    DeleteManyUpload_file_morphArgs: ["where"],
    UpdateManyUpload_file_morphArgs: ["data", "where"],
    UpsertUpload_file_morphArgs: ["where", "create", "update"],
    AggregateUpload_file_morphArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByUpload_file_morphArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = resolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                for (const allActionsDecorator of allActionsDecorators) {
                    allActionsDecorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
                    allActionsDecorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
                }
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            for (const decorator of decorators) {
                decorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
                decorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
            }
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                for (const allActionsDecorator of allActionsDecorators) {
                    allActionsDecorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
                }
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            for (const decorator of decorators) {
                decorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
            }
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        for (const decorator of enhanceConfig.class) {
            decorator(typeClass);
        }
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                for (const allFieldsDecorator of allFieldsDecorators) {
                    allFieldsDecorator(typePrototype, typeFieldName);
                }
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            for (const fieldDecorator of fieldDecorators) {
                fieldDecorator(typePrototype, typeFieldName);
            }
        }
    }
}
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
