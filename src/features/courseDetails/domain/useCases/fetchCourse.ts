import type { Uuid } from "src/features/types"
import type { ICourseRepository } from "../../application/ports/ICourseRepository";


export function fetchCourse(courseRepository: ICourseRepository, id: Uuid) {
	return courseRepository.getById(id);
}