import { User } from "../redux/types";

/**
 * Url used to fetch users
 */
const USER_URL = "https://randomuser.me/api/";

/**
 * Seed is used to get the same results when fetching random users
 */
const SEED = "oak";

/**
 * This flag is only provided for challenge purposes, production code would not have this logic
 */
const SIMULATE_SLOW_DATABASE = false;

/**
 * Makes http call
 * @param url url used for http call
 */
async function api<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = response.json();
  if (!SIMULATE_SLOW_DATABASE) {
    return json;
  }

  await new Promise(resolve => setTimeout(resolve, 5000));
  return json;
}

interface GetUsersResponse {
  results: User[];
}

/**
 * Gets users from users database
 * @param param0 pageSize, pageNr, nationality for getting the users
 */
export async function getUsers({
  pageSize,
  pageNr = 0,
  nationality
}: {
  pageSize: number;
  pageNr?: number;
  nationality: string;
}): Promise<User[]> {
  const params = new URLSearchParams({
    results: pageSize.toString(),
    seed: SEED,
    page: (pageNr + 1).toString(),
    nat: nationality
  });

  const response = await api<GetUsersResponse>(USER_URL + "?" + params);
  return response.results;
}
