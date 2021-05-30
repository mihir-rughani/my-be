import { Prisma } from "@prisma/client";
import { Upload_file_morphCreateNestedOneWithoutImageInput } from "../inputs/Upload_file_morphCreateNestedOneWithoutImageInput";
export declare class Upload_fileCreateInput {
    name: string;
    alternativeText?: string | undefined;
    caption?: string | undefined;
    width?: number | undefined;
    height?: number | undefined;
    formats?: Prisma.InputJsonValue | undefined;
    hash: string;
    ext?: string | undefined;
    mime: string;
    size: Prisma.Decimal;
    url: string;
    previewUrl?: string | undefined;
    provider: string;
    provider_metadata?: Prisma.InputJsonValue | undefined;
    created_by?: number | undefined;
    updated_by?: number | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    image?: Upload_file_morphCreateNestedOneWithoutImageInput | undefined;
}
