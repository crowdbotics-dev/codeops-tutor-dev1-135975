import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_individualuser_list = createAsyncThunk(
  "individualUsers/api_v1_individualuser_list",
  async payload => {
    const response = await apiService.api_v1_individualuser_list(payload)
    return response.data
  }
)
export const api_v1_individualuser_create = createAsyncThunk(
  "individualUsers/api_v1_individualuser_create",
  async payload => {
    const response = await apiService.api_v1_individualuser_create(payload)
    return response.data
  }
)
export const api_v1_individualuser_retrieve = createAsyncThunk(
  "individualUsers/api_v1_individualuser_retrieve",
  async payload => {
    const response = await apiService.api_v1_individualuser_retrieve(payload)
    return response.data
  }
)
export const api_v1_individualuser_update = createAsyncThunk(
  "individualUsers/api_v1_individualuser_update",
  async payload => {
    const response = await apiService.api_v1_individualuser_update(payload)
    return response.data
  }
)
export const api_v1_individualuser_partial_update = createAsyncThunk(
  "individualUsers/api_v1_individualuser_partial_update",
  async payload => {
    const response = await apiService.api_v1_individualuser_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_individualuser_destroy = createAsyncThunk(
  "individualUsers/api_v1_individualuser_destroy",
  async payload => {
    const response = await apiService.api_v1_individualuser_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const individualUsersSlice = createSlice({
  name: "individualUsers",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_individualuser_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_individualuser_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_individualuser_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_individualuser_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_individualuser_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_individualuser_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_individualuser_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_individualuser_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_individualuser_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_individualuser_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_individualuser_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_individualuser_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_individualuser_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_individualuser_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_individualuser_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_individualuser_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_individualuser_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_individualuser_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_individualuser_list,
  api_v1_individualuser_create,
  api_v1_individualuser_retrieve,
  api_v1_individualuser_update,
  api_v1_individualuser_partial_update,
  api_v1_individualuser_destroy,
  slice: individualUsersSlice
}
