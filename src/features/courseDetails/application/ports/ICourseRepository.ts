import type { Course } from 'src/core/domain';
import type { Uuid } from 'src/features/types';

export interface ICourseRepository {
	getById(id: Uuid): Promise<Course>;
}
