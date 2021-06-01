import { Query, Resolver } from "type-graphql";
import { getManager, getRepository } from "typeorm";
import { Bars } from "../../data/entities/Bars";


@Resolver(() => Bars)
export class BarResolver {

	@Query(() => [Bars])
	async bars(): Promise<Bars[]> {

		console.log("calling my own bars api");
		return await getRepository(Bars).find()

	}
}
