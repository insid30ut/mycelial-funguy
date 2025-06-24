export function getDifficultyColor(difficulty: string): string {
  switch (difficulty.toLowerCase()) {
    case 'beginner':
      return 'bg-green-500 text-white';
    case 'intermediate':
      return 'bg-yellow-500 text-white';
    case 'advanced':
      return 'bg-red-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
}