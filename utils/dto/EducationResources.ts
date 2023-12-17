import { isBookCollectionList, type BookCollection } from './BookCollection'
import { isLearningUnitList, type LearningUnit } from './LearningUnit'

interface EducationResources {
    colouring_book_collections: BookCollection[]
    learning_units: LearningUnit[]
    story_book_collections: BookCollection[]
}

export function isEducationResources(
    input: unknown
): input is EducationResources {
    return typeof input === 'object' &&
        input &&
        'colouring_book_collections' in input &&
        isBookCollectionList(input.colouring_book_collections) &&
        'learning_units' in input &&
        isLearningUnitList(input.learning_units) &&
        'story_book_collections' in input &&
        isBookCollectionList(input.story_book_collections)
        ? true
        : false
}
