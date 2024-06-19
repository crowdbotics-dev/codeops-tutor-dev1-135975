import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_faq_list = createAsyncThunk(
  "fAQS/api_v1_faq_list",
  async payload => {
    const response = await apiService.api_v1_faq_list(payload)
    return response.data
  }
)
export const api_v1_faq_create = createAsyncThunk(
  "fAQS/api_v1_faq_create",
  async payload => {
    const response = await apiService.api_v1_faq_create(payload)
    return response.data
  }
)
export const api_v1_faq_retrieve = createAsyncThunk(
  "fAQS/api_v1_faq_retrieve",
  async payload => {
    const response = await apiService.api_v1_faq_retrieve(payload)
    return response.data
  }
)
export const api_v1_faq_update = createAsyncThunk(
  "fAQS/api_v1_faq_update",
  async payload => {
    const response = await apiService.api_v1_faq_update(payload)
    return response.data
  }
)
export const api_v1_faq_partial_update = createAsyncThunk(
  "fAQS/api_v1_faq_partial_update",
  async payload => {
    const response = await apiService.api_v1_faq_partial_update(payload)
    return response.data
  }
)
export const api_v1_faq_destroy = createAsyncThunk(
  "fAQS/api_v1_faq_destroy",
  async payload => {
    const response = await apiService.api_v1_faq_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const fAQSSlice = createSlice({
  name: "fAQS",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_faq_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_faq_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_faq_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_faq_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_faq_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_faq_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_faq_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_faq_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_faq_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_faq_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_faq_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_faq_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_faq_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_faq_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_faq_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_faq_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_faq_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_faq_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_faq_list,
  api_v1_faq_create,
  api_v1_faq_retrieve,
  api_v1_faq_update,
  api_v1_faq_partial_update,
  api_v1_faq_destroy,
  slice: fAQSSlice
}
