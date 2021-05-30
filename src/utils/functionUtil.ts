import * as moment from "moment";

export interface ICreateUpdateTimestamp{
	dateCreated:string;
	dateUpdated:string;
	timeStamp:number
}

export function getCreateUpdateTimestamp() : ICreateUpdateTimestamp {
	const currentTime = moment().format(`DD MMM YYYY:HH:mm:ss`);
	const timeStamp = moment().unix();

	return {
		dateCreated:currentTime,
		dateUpdated:currentTime,
		timeStamp:timeStamp
	}
}
