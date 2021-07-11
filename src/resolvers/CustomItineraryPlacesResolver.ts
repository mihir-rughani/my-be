import { Arg, Ctx, Field, InputType, Int, Mutation, Query, Resolver } from "type-graphql";
import { Itinerary_places } from "../prisma/generated/type-graphql";
import { Prisma } from "@prisma/client";
import GraphQLJSON from "graphql-type-json";
import { Context } from "../../index";

@InputType({ description: "Update Itinerary_places data" })
class ItineraryPlacesInput {
	@Field(type=>String, {nullable:true}) user_id?: string | undefined;
	@Field(() => GraphQLJSON, {nullable:true}) venue_data?: any | undefined;
	@Field(type=>Date, {nullable:true}) date?: Date | undefined;
	@Field(type=>Date, {nullable:true}) time?: Date | undefined;
	@Field(type=>Int, {nullable:true}) created_by?: number | undefined;
	@Field(type=>Int, {nullable:true}) updated_by?: number | undefined;
	@Field(type=>Date, {nullable:true}) created_at?: Date | undefined;
	@Field(type=>Date, {nullable:true}) updated_at?: Date | undefined;
}

@Resolver(Itinerary_places)
export class CustomItineraryPlacesResolver {
	@Mutation(returns => Itinerary_places)
	async customUpdateItineraryPlaces(@Ctx() { prisma }: Context,
							   @Arg("data") data: ItineraryPlacesInput,
							   @Arg("id") id: number,
							   ): Promise<Itinerary_places | null> {
		try{
			return await prisma.Itinerary_places.update({
				where: { id: id},
				update:{
					...data
				}
			});
		}catch (err){

		}

	}
}

