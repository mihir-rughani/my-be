import { Authorized, Query, Resolver } from "type-graphql";
import { RolesEnum } from "../../types/enums";
import { Bars } from "../../data/entities";
//import { IResponseError } from "../../types/interfaces";
import { getRepository } from "typeorm";

@Resolver(() => Bars)
export class BarResolver {

	protected readonly userRepository = getRepository(Bars);

	@Authorized(RolesEnum.Admin, RolesEnum.Artist, RolesEnum.User)
	@Query(() => [Bars])
	async bars(): Promise<Bars[]> {

		console.log("calling the users api");

		return await this.userRepository.createQueryBuilder("bars")
			.getMany();

	}
}
