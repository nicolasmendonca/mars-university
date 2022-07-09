import {immerable} from 'immer'
import type { Uuid } from 'src/features/types';

export class Course {
	[immerable] = true;

	public id: Uuid;
    public title: string;
    public description: string;
    public price: number;
    public createdAt: Date;

	constructor(courseConstructor: CourseConstructor) {
        this.id = courseConstructor.id
        this.title = courseConstructor.title
        this.description = courseConstructor.description
        this.price = courseConstructor.price
        this.createdAt = courseConstructor.createdAt;
    }
}

type CourseConstructor = {
	id: Uuid;
	title: string;
	description: string;
	price: number;
	createdAt: Date;
};