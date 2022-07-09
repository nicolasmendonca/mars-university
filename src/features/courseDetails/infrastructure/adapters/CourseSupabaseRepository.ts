import { Course } from "src/core/domain";
import { supabaseClient } from "../../../../features/services/infrastructure/supabaseClient";
import type { ICourseRepository } from "../../application/ports/ICourseRepository";

export class CourseSupabaseRepository implements ICourseRepository {
    async getById(id: string) {
        const { data } = await supabaseClient.from<SupabaseCourseModel>('courses').select('*').eq('id', id).single()

        if (!data) throw new Error('Course not found')

        return new Course({
            id: data.id,
            title: data.title,
            price: data.price,
            description: data.description,
            createdAt: new Date(data.created_at)
        })
    }
}

type SupabaseCourseModel = {
	id: string;
	title: string;
	description: string;
	price: number;
	created_at: string;
};