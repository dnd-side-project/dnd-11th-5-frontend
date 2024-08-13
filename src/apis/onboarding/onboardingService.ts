import {
  FestivalCategoryResponse,
  FestivalCompanionResponse,
  FestivalMoodResponse,
  FestivalPriorityResponse,
} from "@/model/onboarding";
import { errorLog } from "@/utils/log";

import http from "../http";

export class OnboardingService extends http {
  async getMoods() {
    try {
      const response = await this.get<FestivalMoodResponse>("/festivals/moods");
      return response.data;
    } catch (error) {
      errorLog("Failed to fetch moods:", error);
      throw error;
    }
  }

  async getCategories() {
    try {
      const response = await this.get<FestivalCategoryResponse>(
        "/festivals/categories",
      );
      return response.data;
    } catch (error) {
      errorLog("Failed to fetch categories:", error);
      throw error;
    }
  }

  async getCompanions() {
    try {
      const response = await this.get<FestivalCompanionResponse>(
        "/festivals/companions",
      );
      return response.data;
    } catch (error) {
      errorLog("Failed to fetch companions:", error);
      throw error;
    }
  }

  async getPriority() {
    try {
      const response = await this.get<FestivalPriorityResponse>(
        "/festivals/priorities",
      );
      return response.data;
    } catch (error) {
      errorLog("Failed to fetch priorities:", error);
      throw error;
    }
  }
}
