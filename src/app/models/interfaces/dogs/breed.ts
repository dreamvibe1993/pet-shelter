interface BreedSize {
  imperial: string;
  metric: string;
}

export interface Breed {
  bred_for: string;
  breed_group: string;
  height: BreedSize;
  id: 57;
  life_span: string;
  name: string;
  reference_image_id: string;
  temperament: string;
  weight: BreedSize;
}
