import { apiFetch } from "../services/api";
import { CreateLeadDTO } from "./types";

export async function createLead(data: CreateLeadDTO) {
  return apiFetch('/leads', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}