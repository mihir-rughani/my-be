"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
}) : (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k);
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
    Upload_file: crudResolvers.Upload_fileCrudResolver,
    Upload_file_morph: crudResolvers.Upload_file_morphCrudResolver,
    VenueType: crudResolvers.VenueTypeCrudResolver,
    Venues: crudResolvers.VenuesCrudResolver,
    Itinerary: crudResolvers.ItineraryCrudResolver,
    Itinerary_places: crudResolvers.Itinerary_placesCrudResolver
};
const relationResolversMap = {
    Upload_file: relationResolvers.Upload_fileRelationsResolver,
    Upload_file_morph: relationResolvers.Upload_file_morphRelationsResolver,
    VenueType: relationResolvers.VenueTypeRelationsResolver,
    Venues: relationResolvers.VenuesRelationsResolver,
    Itinerary: relationResolvers.ItineraryRelationsResolver,
    Itinerary_places: relationResolvers.Itinerary_placesRelationsResolver
};
const actionResolversMap = {
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
    },
    VenueType: {
        venueType: actionResolvers.FindUniqueVenueTypeResolver,
        findFirstVenueType: actionResolvers.FindFirstVenueTypeResolver,
        venueTypes: actionResolvers.FindManyVenueTypeResolver,
        createVenueType: actionResolvers.CreateVenueTypeResolver,
        createManyVenueType: actionResolvers.CreateManyVenueTypeResolver,
        deleteVenueType: actionResolvers.DeleteVenueTypeResolver,
        updateVenueType: actionResolvers.UpdateVenueTypeResolver,
        deleteManyVenueType: actionResolvers.DeleteManyVenueTypeResolver,
        updateManyVenueType: actionResolvers.UpdateManyVenueTypeResolver,
        upsertVenueType: actionResolvers.UpsertVenueTypeResolver,
        aggregateVenueType: actionResolvers.AggregateVenueTypeResolver,
        groupByVenueType: actionResolvers.GroupByVenueTypeResolver
    },
    Venues: {
        findUniqueVenues: actionResolvers.FindUniqueVenuesResolver,
        findFirstVenues: actionResolvers.FindFirstVenuesResolver,
        findManyVenues: actionResolvers.FindManyVenuesResolver,
        createVenues: actionResolvers.CreateVenuesResolver,
        createManyVenues: actionResolvers.CreateManyVenuesResolver,
        deleteVenues: actionResolvers.DeleteVenuesResolver,
        updateVenues: actionResolvers.UpdateVenuesResolver,
        deleteManyVenues: actionResolvers.DeleteManyVenuesResolver,
        updateManyVenues: actionResolvers.UpdateManyVenuesResolver,
        upsertVenues: actionResolvers.UpsertVenuesResolver,
        aggregateVenues: actionResolvers.AggregateVenuesResolver,
        groupByVenues: actionResolvers.GroupByVenuesResolver
    },
    Itinerary: {
        itinerary: actionResolvers.FindUniqueItineraryResolver,
        findFirstItinerary: actionResolvers.FindFirstItineraryResolver,
        itineraries: actionResolvers.FindManyItineraryResolver,
        createItinerary: actionResolvers.CreateItineraryResolver,
        createManyItinerary: actionResolvers.CreateManyItineraryResolver,
        deleteItinerary: actionResolvers.DeleteItineraryResolver,
        updateItinerary: actionResolvers.UpdateItineraryResolver,
        deleteManyItinerary: actionResolvers.DeleteManyItineraryResolver,
        updateManyItinerary: actionResolvers.UpdateManyItineraryResolver,
        upsertItinerary: actionResolvers.UpsertItineraryResolver,
        aggregateItinerary: actionResolvers.AggregateItineraryResolver,
        groupByItinerary: actionResolvers.GroupByItineraryResolver
    },
    Itinerary_places: {
        findUniqueItinerary_places: actionResolvers.FindUniqueItinerary_placesResolver,
        findFirstItinerary_places: actionResolvers.FindFirstItinerary_placesResolver,
        findManyItinerary_places: actionResolvers.FindManyItinerary_placesResolver,
        createItinerary_places: actionResolvers.CreateItinerary_placesResolver,
        createManyItinerary_places: actionResolvers.CreateManyItinerary_placesResolver,
        deleteItinerary_places: actionResolvers.DeleteItinerary_placesResolver,
        updateItinerary_places: actionResolvers.UpdateItinerary_placesResolver,
        deleteManyItinerary_places: actionResolvers.DeleteManyItinerary_placesResolver,
        updateManyItinerary_places: actionResolvers.UpdateManyItinerary_placesResolver,
        upsertItinerary_places: actionResolvers.UpsertItinerary_placesResolver,
        aggregateItinerary_places: actionResolvers.AggregateItinerary_placesResolver,
        groupByItinerary_places: actionResolvers.GroupByItinerary_placesResolver
    }
};
const resolversInfo = {
    Upload_file: ["upload_file", "findFirstUpload_file", "upload_files", "createUpload_file", "createManyUpload_file", "deleteUpload_file", "updateUpload_file", "deleteManyUpload_file", "updateManyUpload_file", "upsertUpload_file", "aggregateUpload_file", "groupByUpload_file"],
    Upload_file_morph: ["upload_file_morph", "findFirstUpload_file_morph", "upload_file_morphs", "createUpload_file_morph", "createManyUpload_file_morph", "deleteUpload_file_morph", "updateUpload_file_morph", "deleteManyUpload_file_morph", "updateManyUpload_file_morph", "upsertUpload_file_morph", "aggregateUpload_file_morph", "groupByUpload_file_morph"],
    VenueType: ["venueType", "findFirstVenueType", "venueTypes", "createVenueType", "createManyVenueType", "deleteVenueType", "updateVenueType", "deleteManyVenueType", "updateManyVenueType", "upsertVenueType", "aggregateVenueType", "groupByVenueType"],
    Venues: ["findUniqueVenues", "findFirstVenues", "findManyVenues", "createVenues", "createManyVenues", "deleteVenues", "updateVenues", "deleteManyVenues", "updateManyVenues", "upsertVenues", "aggregateVenues", "groupByVenues"],
    Itinerary: ["itinerary", "findFirstItinerary", "itineraries", "createItinerary", "createManyItinerary", "deleteItinerary", "updateItinerary", "deleteManyItinerary", "updateManyItinerary", "upsertItinerary", "aggregateItinerary", "groupByItinerary"],
    Itinerary_places: ["findUniqueItinerary_places", "findFirstItinerary_places", "findManyItinerary_places", "createItinerary_places", "createManyItinerary_places", "deleteItinerary_places", "updateItinerary_places", "deleteManyItinerary_places", "updateManyItinerary_places", "upsertItinerary_places", "aggregateItinerary_places", "groupByItinerary_places"]
};
const relationResolversInfo = {
    Upload_file: ["uploadFileMorph"],
    Upload_file_morph: ["uploadFile", "venues"],
    VenueType: ["venues"],
    Venues: ["venueType", "uploadFileMorph"],
    Itinerary: ["places"],
    Itinerary_places: ["itinerary"]
};
const modelsInfo = {
    Upload_file: ["id", "name", "alternativeText", "caption", "width", "height", "formats", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "provider_metadata", "created_by", "updated_by", "created_at", "updated_at"],
    Upload_file_morph: ["id", "upload_file_id", "related_id", "related_type", "field", "order"],
    VenueType: ["id", "created_by", "updated_by", "created_at", "updated_at", "name"],
    Venues: ["id", "title", "description", "address", "suburb", "city", "postCode", "lat", "lon", "website", "venue_type", "breakfast", "lunch", "dinner", "visible", "created_by", "updated_by", "created_at", "updated_at", "test", "cosy", "romantic", "weddings", "post_code", "bachelor_party", "hen_party", "outdoor_area", "outdoor_dinning", "outdoor_bar"],
    Itinerary: ["id", "user_id", "itinerary_date", "created_by", "updated_by", "created_at", "updated_at"],
    Itinerary_places: ["id", "user_id", "itinerary_id", "venue_data", "date", "time", "created_by", "updated_by", "created_at", "updated_at"]
};
const inputsInfo = {
    Upload_fileWhereInput: ["AND", "OR", "NOT", "id", "name", "alternativeText", "caption", "width", "height", "formats", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "provider_metadata", "created_by", "updated_by", "created_at", "updated_at", "uploadFileMorph"],
    Upload_fileOrderByInput: ["id", "name", "alternativeText", "caption", "width", "height", "formats", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "provider_metadata", "created_by", "updated_by", "created_at", "updated_at"],
    Upload_fileWhereUniqueInput: ["id"],
    Upload_fileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "alternativeText", "caption", "width", "height", "formats", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "provider_metadata", "created_by", "updated_by", "created_at", "updated_at"],
    Upload_file_morphWhereInput: ["AND", "OR", "NOT", "id", "upload_file_id", "related_id", "related_type", "field", "order", "uploadFile", "venues"],
    Upload_file_morphOrderByInput: ["id", "upload_file_id", "related_id", "related_type", "field", "order"],
    Upload_file_morphWhereUniqueInput: ["id"],
    Upload_file_morphScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "upload_file_id", "related_id", "related_type", "field", "order"],
    VenueTypeWhereInput: ["AND", "OR", "NOT", "id", "created_by", "updated_by", "created_at", "updated_at", "name", "venues"],
    VenueTypeOrderByInput: ["id", "created_by", "updated_by", "created_at", "updated_at", "name"],
    VenueTypeWhereUniqueInput: ["id"],
    VenueTypeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "created_by", "updated_by", "created_at", "updated_at", "name"],
    VenuesWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "address", "suburb", "city", "postCode", "lat", "lon", "website", "venue_type", "breakfast", "lunch", "dinner", "visible", "created_by", "updated_by", "created_at", "updated_at", "test", "cosy", "romantic", "weddings", "post_code", "bachelor_party", "hen_party", "outdoor_area", "outdoor_dinning", "outdoor_bar", "venueType", "uploadFileMorph"],
    VenuesOrderByInput: ["id", "title", "description", "address", "suburb", "city", "postCode", "lat", "lon", "website", "venue_type", "breakfast", "lunch", "dinner", "visible", "created_by", "updated_by", "created_at", "updated_at", "test", "cosy", "romantic", "weddings", "post_code", "bachelor_party", "hen_party", "outdoor_area", "outdoor_dinning", "outdoor_bar"],
    VenuesWhereUniqueInput: ["id"],
    VenuesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "address", "suburb", "city", "postCode", "lat", "lon", "website", "venue_type", "breakfast", "lunch", "dinner", "visible", "created_by", "updated_by", "created_at", "updated_at", "test", "cosy", "romantic", "weddings", "post_code", "bachelor_party", "hen_party", "outdoor_area", "outdoor_dinning", "outdoor_bar"],
    ItineraryWhereInput: ["AND", "OR", "NOT", "id", "user_id", "itinerary_date", "created_by", "updated_by", "created_at", "updated_at", "places"],
    ItineraryOrderByInput: ["id", "user_id", "itinerary_date", "created_by", "updated_by", "created_at", "updated_at"],
    ItineraryWhereUniqueInput: ["id"],
    ItineraryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "user_id", "itinerary_date", "created_by", "updated_by", "created_at", "updated_at"],
    Itinerary_placesWhereInput: ["AND", "OR", "NOT", "id", "user_id", "itinerary_id", "venue_data", "date", "time", "created_by", "updated_by", "created_at", "updated_at", "itinerary"],
    Itinerary_placesOrderByInput: ["id", "user_id", "itinerary_id", "venue_data", "date", "time", "created_by", "updated_by", "created_at", "updated_at"],
    Itinerary_placesWhereUniqueInput: ["id"],
    Itinerary_placesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "user_id", "itinerary_id", "venue_data", "date", "time", "created_by", "updated_by", "created_at", "updated_at"],
    Upload_fileCreateInput: ["name", "alternativeText", "caption", "width", "height", "formats", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "provider_metadata", "created_by", "updated_by", "created_at", "updated_at", "uploadFileMorph"],
    Upload_fileUpdateInput: ["name", "alternativeText", "caption", "width", "height", "formats", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "provider_metadata", "created_by", "updated_by", "created_at", "updated_at", "uploadFileMorph"],
    Upload_fileCreateManyInput: ["id", "name", "alternativeText", "caption", "width", "height", "formats", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "provider_metadata", "created_by", "updated_by", "created_at", "updated_at"],
    Upload_fileUpdateManyMutationInput: ["name", "alternativeText", "caption", "width", "height", "formats", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "provider_metadata", "created_by", "updated_by", "created_at", "updated_at"],
    Upload_file_morphCreateInput: ["related_type", "field", "order", "uploadFile", "venues"],
    Upload_file_morphUpdateInput: ["related_type", "field", "order", "uploadFile", "venues"],
    Upload_file_morphCreateManyInput: ["id", "upload_file_id", "related_id", "related_type", "field", "order"],
    Upload_file_morphUpdateManyMutationInput: ["related_type", "field", "order"],
    VenueTypeCreateInput: ["created_by", "updated_by", "created_at", "updated_at", "name", "venues"],
    VenueTypeUpdateInput: ["created_by", "updated_by", "created_at", "updated_at", "name", "venues"],
    VenueTypeCreateManyInput: ["id", "created_by", "updated_by", "created_at", "updated_at", "name"],
    VenueTypeUpdateManyMutationInput: ["created_by", "updated_by", "created_at", "updated_at", "name"],
    VenuesCreateInput: ["title", "description", "address", "suburb", "city", "postCode", "lat", "lon", "website", "breakfast", "lunch", "dinner", "visible", "created_by", "updated_by", "created_at", "updated_at", "test", "cosy", "romantic", "weddings", "post_code", "bachelor_party", "hen_party", "outdoor_area", "outdoor_dinning", "outdoor_bar", "venueType", "uploadFileMorph"],
    VenuesUpdateInput: ["title", "description", "address", "suburb", "city", "postCode", "lat", "lon", "website", "breakfast", "lunch", "dinner", "visible", "created_by", "updated_by", "created_at", "updated_at", "test", "cosy", "romantic", "weddings", "post_code", "bachelor_party", "hen_party", "outdoor_area", "outdoor_dinning", "outdoor_bar", "venueType", "uploadFileMorph"],
    VenuesCreateManyInput: ["id", "title", "description", "address", "suburb", "city", "postCode", "lat", "lon", "website", "venue_type", "breakfast", "lunch", "dinner", "visible", "created_by", "updated_by", "created_at", "updated_at", "test", "cosy", "romantic", "weddings", "post_code", "bachelor_party", "hen_party", "outdoor_area", "outdoor_dinning", "outdoor_bar"],
    VenuesUpdateManyMutationInput: ["title", "description", "address", "suburb", "city", "postCode", "lat", "lon", "website", "breakfast", "lunch", "dinner", "visible", "created_by", "updated_by", "created_at", "updated_at", "test", "cosy", "romantic", "weddings", "post_code", "bachelor_party", "hen_party", "outdoor_area", "outdoor_dinning", "outdoor_bar"],
    ItineraryCreateInput: ["user_id", "itinerary_date", "created_by", "updated_by", "created_at", "updated_at", "places"],
    ItineraryUpdateInput: ["user_id", "itinerary_date", "created_by", "updated_by", "created_at", "updated_at", "places"],
    ItineraryCreateManyInput: ["id", "user_id", "itinerary_date", "created_by", "updated_by", "created_at", "updated_at"],
    ItineraryUpdateManyMutationInput: ["user_id", "itinerary_date", "created_by", "updated_by", "created_at", "updated_at"],
    Itinerary_placesCreateInput: ["user_id", "venue_data", "date", "time", "created_by", "updated_by", "created_at", "updated_at", "itinerary"],
    Itinerary_placesUpdateInput: ["user_id", "venue_data", "date", "time", "created_by", "updated_by", "created_at", "updated_at", "itinerary"],
    Itinerary_placesCreateManyInput: ["id", "user_id", "itinerary_id", "venue_data", "date", "time", "created_by", "updated_by", "created_at", "updated_at"],
    Itinerary_placesUpdateManyMutationInput: ["user_id", "venue_data", "date", "time", "created_by", "updated_by", "created_at", "updated_at"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    JsonNullableFilter: ["equals", "not"],
    DecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    Upload_file_morphListRelationFilter: ["every", "some", "none"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    JsonNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    DecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    Upload_fileRelationFilter: ["is", "isNot"],
    VenuesRelationFilter: ["is", "isNot"],
    VenuesListRelationFilter: ["every", "some", "none"],
    FloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    BoolNullableFilter: ["equals", "not"],
    VenueTypeRelationFilter: ["is", "isNot"],
    FloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    BoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    Itinerary_placesListRelationFilter: ["every", "some", "none"],
    ItineraryRelationFilter: ["is", "isNot"],
    Upload_file_morphCreateNestedManyWithoutUploadFileInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    DecimalFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    Upload_file_morphUpdateManyWithoutUploadFileInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    Upload_fileCreateNestedOneWithoutUploadFileMorphInput: ["create", "connectOrCreate", "connect"],
    VenuesCreateNestedOneWithoutUploadFileMorphInput: ["create", "connectOrCreate", "connect"],
    Upload_fileUpdateOneWithoutUploadFileMorphInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    VenuesUpdateOneWithoutUploadFileMorphInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    VenuesCreateNestedManyWithoutVenueTypeInput: ["create", "connectOrCreate", "createMany", "connect"],
    VenuesUpdateManyWithoutVenueTypeInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    VenueTypeCreateNestedOneWithoutVenuesInput: ["create", "connectOrCreate", "connect"],
    Upload_file_morphCreateNestedManyWithoutVenuesInput: ["create", "connectOrCreate", "createMany", "connect"],
    NullableFloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    NullableBoolFieldUpdateOperationsInput: ["set"],
    VenueTypeUpdateOneWithoutVenuesInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    Upload_file_morphUpdateManyWithoutVenuesInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    Itinerary_placesCreateNestedManyWithoutItineraryInput: ["create", "connectOrCreate", "createMany", "connect"],
    Itinerary_placesUpdateManyWithoutItineraryInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    ItineraryCreateNestedOneWithoutPlacesInput: ["create", "connectOrCreate", "connect"],
    ItineraryUpdateOneWithoutPlacesInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedJsonNullableFilter: ["equals", "not"],
    NestedDecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedBoolNullableFilter: ["equals", "not"],
    NestedFloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedBoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    Upload_file_morphCreateWithoutUploadFileInput: ["related_type", "field", "order", "venues"],
    Upload_file_morphCreateOrConnectWithoutUploadFileInput: ["where", "create"],
    Upload_file_morphCreateManyUploadFileInputEnvelope: ["data", "skipDuplicates"],
    Upload_file_morphUpsertWithWhereUniqueWithoutUploadFileInput: ["where", "update", "create"],
    Upload_file_morphUpdateWithWhereUniqueWithoutUploadFileInput: ["where", "data"],
    Upload_file_morphUpdateManyWithWhereWithoutUploadFileInput: ["where", "data"],
    Upload_file_morphScalarWhereInput: ["AND", "OR", "NOT", "id", "upload_file_id", "related_id", "related_type", "field", "order"],
    Upload_fileCreateWithoutUploadFileMorphInput: ["name", "alternativeText", "caption", "width", "height", "formats", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "provider_metadata", "created_by", "updated_by", "created_at", "updated_at"],
    Upload_fileCreateOrConnectWithoutUploadFileMorphInput: ["where", "create"],
    VenuesCreateWithoutUploadFileMorphInput: ["title", "description", "address", "suburb", "city", "postCode", "lat", "lon", "website", "breakfast", "lunch", "dinner", "visible", "created_by", "updated_by", "created_at", "updated_at", "test", "cosy", "romantic", "weddings", "post_code", "bachelor_party", "hen_party", "outdoor_area", "outdoor_dinning", "outdoor_bar", "venueType"],
    VenuesCreateOrConnectWithoutUploadFileMorphInput: ["where", "create"],
    Upload_fileUpsertWithoutUploadFileMorphInput: ["update", "create"],
    Upload_fileUpdateWithoutUploadFileMorphInput: ["name", "alternativeText", "caption", "width", "height", "formats", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "provider_metadata", "created_by", "updated_by", "created_at", "updated_at"],
    VenuesUpsertWithoutUploadFileMorphInput: ["update", "create"],
    VenuesUpdateWithoutUploadFileMorphInput: ["title", "description", "address", "suburb", "city", "postCode", "lat", "lon", "website", "breakfast", "lunch", "dinner", "visible", "created_by", "updated_by", "created_at", "updated_at", "test", "cosy", "romantic", "weddings", "post_code", "bachelor_party", "hen_party", "outdoor_area", "outdoor_dinning", "outdoor_bar", "venueType"],
    VenuesCreateWithoutVenueTypeInput: ["title", "description", "address", "suburb", "city", "postCode", "lat", "lon", "website", "breakfast", "lunch", "dinner", "visible", "created_by", "updated_by", "created_at", "updated_at", "test", "cosy", "romantic", "weddings", "post_code", "bachelor_party", "hen_party", "outdoor_area", "outdoor_dinning", "outdoor_bar", "uploadFileMorph"],
    VenuesCreateOrConnectWithoutVenueTypeInput: ["where", "create"],
    VenuesCreateManyVenueTypeInputEnvelope: ["data", "skipDuplicates"],
    VenuesUpsertWithWhereUniqueWithoutVenueTypeInput: ["where", "update", "create"],
    VenuesUpdateWithWhereUniqueWithoutVenueTypeInput: ["where", "data"],
    VenuesUpdateManyWithWhereWithoutVenueTypeInput: ["where", "data"],
    VenuesScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "address", "suburb", "city", "postCode", "lat", "lon", "website", "venue_type", "breakfast", "lunch", "dinner", "visible", "created_by", "updated_by", "created_at", "updated_at", "test", "cosy", "romantic", "weddings", "post_code", "bachelor_party", "hen_party", "outdoor_area", "outdoor_dinning", "outdoor_bar"],
    VenueTypeCreateWithoutVenuesInput: ["created_by", "updated_by", "created_at", "updated_at", "name"],
    VenueTypeCreateOrConnectWithoutVenuesInput: ["where", "create"],
    Upload_file_morphCreateWithoutVenuesInput: ["related_type", "field", "order", "uploadFile"],
    Upload_file_morphCreateOrConnectWithoutVenuesInput: ["where", "create"],
    Upload_file_morphCreateManyVenuesInputEnvelope: ["data", "skipDuplicates"],
    VenueTypeUpsertWithoutVenuesInput: ["update", "create"],
    VenueTypeUpdateWithoutVenuesInput: ["created_by", "updated_by", "created_at", "updated_at", "name"],
    Upload_file_morphUpsertWithWhereUniqueWithoutVenuesInput: ["where", "update", "create"],
    Upload_file_morphUpdateWithWhereUniqueWithoutVenuesInput: ["where", "data"],
    Upload_file_morphUpdateManyWithWhereWithoutVenuesInput: ["where", "data"],
    Itinerary_placesCreateWithoutItineraryInput: ["user_id", "venue_data", "date", "time", "created_by", "updated_by", "created_at", "updated_at"],
    Itinerary_placesCreateOrConnectWithoutItineraryInput: ["where", "create"],
    Itinerary_placesCreateManyItineraryInputEnvelope: ["data", "skipDuplicates"],
    Itinerary_placesUpsertWithWhereUniqueWithoutItineraryInput: ["where", "update", "create"],
    Itinerary_placesUpdateWithWhereUniqueWithoutItineraryInput: ["where", "data"],
    Itinerary_placesUpdateManyWithWhereWithoutItineraryInput: ["where", "data"],
    Itinerary_placesScalarWhereInput: ["AND", "OR", "NOT", "id", "user_id", "itinerary_id", "venue_data", "date", "time", "created_by", "updated_by", "created_at", "updated_at"],
    ItineraryCreateWithoutPlacesInput: ["user_id", "itinerary_date", "created_by", "updated_by", "created_at", "updated_at"],
    ItineraryCreateOrConnectWithoutPlacesInput: ["where", "create"],
    ItineraryUpsertWithoutPlacesInput: ["update", "create"],
    ItineraryUpdateWithoutPlacesInput: ["user_id", "itinerary_date", "created_by", "updated_by", "created_at", "updated_at"],
    Upload_file_morphCreateManyUploadFileInput: ["id", "related_id", "related_type", "field", "order"],
    Upload_file_morphUpdateWithoutUploadFileInput: ["related_type", "field", "order", "venues"],
    VenuesCreateManyVenueTypeInput: ["id", "title", "description", "address", "suburb", "city", "postCode", "lat", "lon", "website", "breakfast", "lunch", "dinner", "visible", "created_by", "updated_by", "created_at", "updated_at", "test", "cosy", "romantic", "weddings", "post_code", "bachelor_party", "hen_party", "outdoor_area", "outdoor_dinning", "outdoor_bar"],
    VenuesUpdateWithoutVenueTypeInput: ["title", "description", "address", "suburb", "city", "postCode", "lat", "lon", "website", "breakfast", "lunch", "dinner", "visible", "created_by", "updated_by", "created_at", "updated_at", "test", "cosy", "romantic", "weddings", "post_code", "bachelor_party", "hen_party", "outdoor_area", "outdoor_dinning", "outdoor_bar", "uploadFileMorph"],
    Upload_file_morphCreateManyVenuesInput: ["id", "upload_file_id", "related_type", "field", "order"],
    Upload_file_morphUpdateWithoutVenuesInput: ["related_type", "field", "order", "uploadFile"],
    Itinerary_placesCreateManyItineraryInput: ["id", "user_id", "venue_data", "date", "time", "created_by", "updated_by", "created_at", "updated_at"],
    Itinerary_placesUpdateWithoutItineraryInput: ["user_id", "venue_data", "date", "time", "created_by", "updated_by", "created_at", "updated_at"]
};
const outputsInfo = {
    AggregateUpload_file: ["_count", "_avg", "_sum", "_min", "_max"],
    Upload_fileGroupBy: ["id", "name", "alternativeText", "caption", "width", "height", "formats", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "provider_metadata", "created_by", "updated_by", "created_at", "updated_at", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateUpload_file_morph: ["_count", "_avg", "_sum", "_min", "_max"],
    Upload_file_morphGroupBy: ["id", "upload_file_id", "related_id", "related_type", "field", "order", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateVenueType: ["_count", "_avg", "_sum", "_min", "_max"],
    VenueTypeGroupBy: ["id", "created_by", "updated_by", "created_at", "updated_at", "name", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateVenues: ["_count", "_avg", "_sum", "_min", "_max"],
    VenuesGroupBy: ["id", "title", "description", "address", "suburb", "city", "postCode", "lat", "lon", "website", "venue_type", "breakfast", "lunch", "dinner", "visible", "created_by", "updated_by", "created_at", "updated_at", "test", "cosy", "romantic", "weddings", "post_code", "bachelor_party", "hen_party", "outdoor_area", "outdoor_dinning", "outdoor_bar", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateItinerary: ["_count", "_avg", "_sum", "_min", "_max"],
    ItineraryGroupBy: ["id", "user_id", "itinerary_date", "created_by", "updated_by", "created_at", "updated_at", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateItinerary_places: ["_count", "_avg", "_sum", "_min", "_max"],
    Itinerary_placesGroupBy: ["id", "user_id", "itinerary_id", "venue_data", "date", "time", "created_by", "updated_by", "created_at", "updated_at", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    Upload_fileCountAggregate: ["id", "name", "alternativeText", "caption", "width", "height", "formats", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "provider_metadata", "created_by", "updated_by", "created_at", "updated_at", "_all"],
    Upload_fileAvgAggregate: ["id", "width", "height", "size", "created_by", "updated_by"],
    Upload_fileSumAggregate: ["id", "width", "height", "size", "created_by", "updated_by"],
    Upload_fileMinAggregate: ["id", "name", "alternativeText", "caption", "width", "height", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "created_by", "updated_by", "created_at", "updated_at"],
    Upload_fileMaxAggregate: ["id", "name", "alternativeText", "caption", "width", "height", "hash", "ext", "mime", "size", "url", "previewUrl", "provider", "created_by", "updated_by", "created_at", "updated_at"],
    Upload_file_morphCountAggregate: ["id", "upload_file_id", "related_id", "related_type", "field", "order", "_all"],
    Upload_file_morphAvgAggregate: ["id", "upload_file_id", "related_id", "order"],
    Upload_file_morphSumAggregate: ["id", "upload_file_id", "related_id", "order"],
    Upload_file_morphMinAggregate: ["id", "upload_file_id", "related_id", "related_type", "field", "order"],
    Upload_file_morphMaxAggregate: ["id", "upload_file_id", "related_id", "related_type", "field", "order"],
    VenueTypeCountAggregate: ["id", "created_by", "updated_by", "created_at", "updated_at", "name", "_all"],
    VenueTypeAvgAggregate: ["id", "created_by", "updated_by"],
    VenueTypeSumAggregate: ["id", "created_by", "updated_by"],
    VenueTypeMinAggregate: ["id", "created_by", "updated_by", "created_at", "updated_at", "name"],
    VenueTypeMaxAggregate: ["id", "created_by", "updated_by", "created_at", "updated_at", "name"],
    VenuesCountAggregate: ["id", "title", "description", "address", "suburb", "city", "postCode", "lat", "lon", "website", "venue_type", "breakfast", "lunch", "dinner", "visible", "created_by", "updated_by", "created_at", "updated_at", "test", "cosy", "romantic", "weddings", "post_code", "bachelor_party", "hen_party", "outdoor_area", "outdoor_dinning", "outdoor_bar", "_all"],
    VenuesAvgAggregate: ["id", "lat", "lon", "venue_type", "created_by", "updated_by"],
    VenuesSumAggregate: ["id", "lat", "lon", "venue_type", "created_by", "updated_by"],
    VenuesMinAggregate: ["id", "title", "description", "address", "suburb", "city", "postCode", "lat", "lon", "website", "venue_type", "breakfast", "lunch", "dinner", "visible", "created_by", "updated_by", "created_at", "updated_at", "test", "cosy", "romantic", "weddings", "post_code", "bachelor_party", "hen_party", "outdoor_area", "outdoor_dinning", "outdoor_bar"],
    VenuesMaxAggregate: ["id", "title", "description", "address", "suburb", "city", "postCode", "lat", "lon", "website", "venue_type", "breakfast", "lunch", "dinner", "visible", "created_by", "updated_by", "created_at", "updated_at", "test", "cosy", "romantic", "weddings", "post_code", "bachelor_party", "hen_party", "outdoor_area", "outdoor_dinning", "outdoor_bar"],
    ItineraryCountAggregate: ["id", "user_id", "itinerary_date", "created_by", "updated_by", "created_at", "updated_at", "_all"],
    ItineraryAvgAggregate: ["id", "created_by", "updated_by"],
    ItinerarySumAggregate: ["id", "created_by", "updated_by"],
    ItineraryMinAggregate: ["id", "user_id", "itinerary_date", "created_by", "updated_by", "created_at", "updated_at"],
    ItineraryMaxAggregate: ["id", "user_id", "itinerary_date", "created_by", "updated_by", "created_at", "updated_at"],
    Itinerary_placesCountAggregate: ["id", "user_id", "itinerary_id", "venue_data", "date", "time", "created_by", "updated_by", "created_at", "updated_at", "_all"],
    Itinerary_placesAvgAggregate: ["id", "itinerary_id", "created_by", "updated_by"],
    Itinerary_placesSumAggregate: ["id", "itinerary_id", "created_by", "updated_by"],
    Itinerary_placesMinAggregate: ["id", "user_id", "itinerary_id", "date", "time", "created_by", "updated_by", "created_at", "updated_at"],
    Itinerary_placesMaxAggregate: ["id", "user_id", "itinerary_id", "date", "time", "created_by", "updated_by", "created_at", "updated_at"]
};
const argsInfo = {
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
    GroupByUpload_file_morphArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueVenueTypeArgs: ["where"],
    FindFirstVenueTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyVenueTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateVenueTypeArgs: ["data"],
    CreateManyVenueTypeArgs: ["data", "skipDuplicates"],
    DeleteVenueTypeArgs: ["where"],
    UpdateVenueTypeArgs: ["data", "where"],
    DeleteManyVenueTypeArgs: ["where"],
    UpdateManyVenueTypeArgs: ["data", "where"],
    UpsertVenueTypeArgs: ["where", "create", "update"],
    AggregateVenueTypeArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByVenueTypeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueVenuesArgs: ["where"],
    FindFirstVenuesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyVenuesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateVenuesArgs: ["data"],
    CreateManyVenuesArgs: ["data", "skipDuplicates"],
    DeleteVenuesArgs: ["where"],
    UpdateVenuesArgs: ["data", "where"],
    DeleteManyVenuesArgs: ["where"],
    UpdateManyVenuesArgs: ["data", "where"],
    UpsertVenuesArgs: ["where", "create", "update"],
    AggregateVenuesArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByVenuesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueItineraryArgs: ["where"],
    FindFirstItineraryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyItineraryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateItineraryArgs: ["data"],
    CreateManyItineraryArgs: ["data", "skipDuplicates"],
    DeleteItineraryArgs: ["where"],
    UpdateItineraryArgs: ["data", "where"],
    DeleteManyItineraryArgs: ["where"],
    UpdateManyItineraryArgs: ["data", "where"],
    UpsertItineraryArgs: ["where", "create", "update"],
    AggregateItineraryArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByItineraryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueItinerary_placesArgs: ["where"],
    FindFirstItinerary_placesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyItinerary_placesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateItinerary_placesArgs: ["data"],
    CreateManyItinerary_placesArgs: ["data", "skipDuplicates"],
    DeleteItinerary_placesArgs: ["where"],
    UpdateItinerary_placesArgs: ["data", "where"],
    DeleteManyItinerary_placesArgs: ["where"],
    UpdateManyItinerary_placesArgs: ["data", "where"],
    UpsertItinerary_placesArgs: ["where", "create", "update"],
    AggregateItinerary_placesArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByItinerary_placesArgs: ["where", "orderBy", "by", "having", "take", "skip"]
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
//# sourceMappingURL=enhance.js.map