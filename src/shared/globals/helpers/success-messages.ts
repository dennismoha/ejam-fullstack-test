import { Superhero } from '@src/features/superhero/interfaces/superhero.interface';
// Utility type to handle both singular and array types
type WithArray<T> = T | T[];

// success_data type using WithArray
type success_data = WithArray<Superhero> | null;

// GetSuccessMessage function
export default function GetSuccessMessage(
  statusCode: number,
  data: success_data,
  statusMessage: string,
) {
  return {
    statusCode: statusCode || 200, // Default to 200 if statusCode is not provided
    data: data || [], // Default to empty array if data is not provided (no null data allowed)
    status: statusMessage || 'Success', // Default to 'Success' if statusMessage is not provided
  };
}
