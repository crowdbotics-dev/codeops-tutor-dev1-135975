import axios from "axios"
const codeopstutordevAPI = axios.create({
  baseURL: "https://codeops-tutor-dev1-135975.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return codeopstutordevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_apiintegration_list(payload) {
  return codeopstutordevAPI.get(`/api/v1/apiintegration/`)
}
function api_v1_apiintegration_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/apiintegration/`, payload)
}
function api_v1_apiintegration_retrieve(payload) {
  return codeopstutordevAPI.get(`/api/v1/apiintegration/${payload.id}/`)
}
function api_v1_apiintegration_update(payload) {
  return codeopstutordevAPI.put(
    `/api/v1/apiintegration/${payload.id}/`,
    payload
  )
}
function api_v1_apiintegration_partial_update(payload) {
  return codeopstutordevAPI.patch(
    `/api/v1/apiintegration/${payload.id}/`,
    payload
  )
}
function api_v1_apiintegration_destroy(payload) {
  return codeopstutordevAPI.delete(`/api/v1/apiintegration/${payload.id}/`)
}
function api_v1_auditlog_list(payload) {
  return codeopstutordevAPI.get(`/api/v1/auditlog/`)
}
function api_v1_auditlog_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/auditlog/`, payload)
}
function api_v1_auditlog_retrieve(payload) {
  return codeopstutordevAPI.get(`/api/v1/auditlog/${payload.id}/`)
}
function api_v1_auditlog_update(payload) {
  return codeopstutordevAPI.put(`/api/v1/auditlog/${payload.id}/`, payload)
}
function api_v1_auditlog_partial_update(payload) {
  return codeopstutordevAPI.patch(`/api/v1/auditlog/${payload.id}/`, payload)
}
function api_v1_auditlog_destroy(payload) {
  return codeopstutordevAPI.delete(`/api/v1/auditlog/${payload.id}/`)
}
function api_v1_certification_list(payload) {
  return codeopstutordevAPI.get(`/api/v1/certification/`)
}
function api_v1_certification_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/certification/`, payload)
}
function api_v1_certification_retrieve(payload) {
  return codeopstutordevAPI.get(`/api/v1/certification/${payload.id}/`)
}
function api_v1_certification_update(payload) {
  return codeopstutordevAPI.put(`/api/v1/certification/${payload.id}/`, payload)
}
function api_v1_certification_partial_update(payload) {
  return codeopstutordevAPI.patch(
    `/api/v1/certification/${payload.id}/`,
    payload
  )
}
function api_v1_certification_destroy(payload) {
  return codeopstutordevAPI.delete(`/api/v1/certification/${payload.id}/`)
}
function api_v1_consultancysession_list(payload) {
  return codeopstutordevAPI.get(`/api/v1/consultancysession/`)
}
function api_v1_consultancysession_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/consultancysession/`, payload)
}
function api_v1_consultancysession_retrieve(payload) {
  return codeopstutordevAPI.get(`/api/v1/consultancysession/${payload.id}/`)
}
function api_v1_consultancysession_update(payload) {
  return codeopstutordevAPI.put(
    `/api/v1/consultancysession/${payload.id}/`,
    payload
  )
}
function api_v1_consultancysession_partial_update(payload) {
  return codeopstutordevAPI.patch(
    `/api/v1/consultancysession/${payload.id}/`,
    payload
  )
}
function api_v1_consultancysession_destroy(payload) {
  return codeopstutordevAPI.delete(`/api/v1/consultancysession/${payload.id}/`)
}
function api_v1_enterprise_list(payload) {
  return codeopstutordevAPI.get(`/api/v1/enterprise/`)
}
function api_v1_enterprise_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/enterprise/`, payload)
}
function api_v1_enterprise_retrieve(payload) {
  return codeopstutordevAPI.get(`/api/v1/enterprise/${payload.id}/`)
}
function api_v1_enterprise_update(payload) {
  return codeopstutordevAPI.put(`/api/v1/enterprise/${payload.id}/`, payload)
}
function api_v1_enterprise_partial_update(payload) {
  return codeopstutordevAPI.patch(`/api/v1/enterprise/${payload.id}/`, payload)
}
function api_v1_enterprise_destroy(payload) {
  return codeopstutordevAPI.delete(`/api/v1/enterprise/${payload.id}/`)
}
function api_v1_faq_list(payload) {
  return codeopstutordevAPI.get(`/api/v1/faq/`)
}
function api_v1_faq_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/faq/`, payload)
}
function api_v1_faq_retrieve(payload) {
  return codeopstutordevAPI.get(`/api/v1/faq/${payload.id}/`)
}
function api_v1_faq_update(payload) {
  return codeopstutordevAPI.put(`/api/v1/faq/${payload.id}/`, payload)
}
function api_v1_faq_partial_update(payload) {
  return codeopstutordevAPI.patch(`/api/v1/faq/${payload.id}/`, payload)
}
function api_v1_faq_destroy(payload) {
  return codeopstutordevAPI.delete(`/api/v1/faq/${payload.id}/`)
}
function api_v1_individualuser_list(payload) {
  return codeopstutordevAPI.get(`/api/v1/individualuser/`)
}
function api_v1_individualuser_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/individualuser/`, payload)
}
function api_v1_individualuser_retrieve(payload) {
  return codeopstutordevAPI.get(`/api/v1/individualuser/${payload.id}/`)
}
function api_v1_individualuser_update(payload) {
  return codeopstutordevAPI.put(
    `/api/v1/individualuser/${payload.id}/`,
    payload
  )
}
function api_v1_individualuser_partial_update(payload) {
  return codeopstutordevAPI.patch(
    `/api/v1/individualuser/${payload.id}/`,
    payload
  )
}
function api_v1_individualuser_destroy(payload) {
  return codeopstutordevAPI.delete(`/api/v1/individualuser/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_metric_list(payload) {
  return codeopstutordevAPI.get(`/api/v1/metric/`)
}
function api_v1_metric_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/metric/`, payload)
}
function api_v1_metric_retrieve(payload) {
  return codeopstutordevAPI.get(`/api/v1/metric/${payload.id}/`)
}
function api_v1_metric_update(payload) {
  return codeopstutordevAPI.put(`/api/v1/metric/${payload.id}/`, payload)
}
function api_v1_metric_partial_update(payload) {
  return codeopstutordevAPI.patch(`/api/v1/metric/${payload.id}/`, payload)
}
function api_v1_metric_destroy(payload) {
  return codeopstutordevAPI.delete(`/api/v1/metric/${payload.id}/`)
}
function api_v1_module_list(payload) {
  return codeopstutordevAPI.get(`/api/v1/module/`)
}
function api_v1_module_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/module/`, payload)
}
function api_v1_module_retrieve(payload) {
  return codeopstutordevAPI.get(`/api/v1/module/${payload.id}/`)
}
function api_v1_module_update(payload) {
  return codeopstutordevAPI.put(`/api/v1/module/${payload.id}/`, payload)
}
function api_v1_module_partial_update(payload) {
  return codeopstutordevAPI.patch(`/api/v1/module/${payload.id}/`, payload)
}
function api_v1_module_destroy(payload) {
  return codeopstutordevAPI.delete(`/api/v1/module/${payload.id}/`)
}
function api_v1_project_list(payload) {
  return codeopstutordevAPI.get(`/api/v1/project/`)
}
function api_v1_project_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/project/`, payload)
}
function api_v1_project_retrieve(payload) {
  return codeopstutordevAPI.get(`/api/v1/project/${payload.id}/`)
}
function api_v1_project_update(payload) {
  return codeopstutordevAPI.put(`/api/v1/project/${payload.id}/`, payload)
}
function api_v1_project_partial_update(payload) {
  return codeopstutordevAPI.patch(`/api/v1/project/${payload.id}/`, payload)
}
function api_v1_project_destroy(payload) {
  return codeopstutordevAPI.delete(`/api/v1/project/${payload.id}/`)
}
function api_v1_report_list(payload) {
  return codeopstutordevAPI.get(`/api/v1/report/`)
}
function api_v1_report_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/report/`, payload)
}
function api_v1_report_retrieve(payload) {
  return codeopstutordevAPI.get(`/api/v1/report/${payload.id}/`)
}
function api_v1_report_update(payload) {
  return codeopstutordevAPI.put(`/api/v1/report/${payload.id}/`, payload)
}
function api_v1_report_partial_update(payload) {
  return codeopstutordevAPI.patch(`/api/v1/report/${payload.id}/`, payload)
}
function api_v1_report_destroy(payload) {
  return codeopstutordevAPI.delete(`/api/v1/report/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_ticket_list(payload) {
  return codeopstutordevAPI.get(`/api/v1/ticket/`)
}
function api_v1_ticket_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/ticket/`, payload)
}
function api_v1_ticket_retrieve(payload) {
  return codeopstutordevAPI.get(`/api/v1/ticket/${payload.id}/`)
}
function api_v1_ticket_update(payload) {
  return codeopstutordevAPI.put(`/api/v1/ticket/${payload.id}/`, payload)
}
function api_v1_ticket_partial_update(payload) {
  return codeopstutordevAPI.patch(`/api/v1/ticket/${payload.id}/`, payload)
}
function api_v1_ticket_destroy(payload) {
  return codeopstutordevAPI.delete(`/api/v1/ticket/${payload.id}/`)
}
function api_v1_user_list(payload) {
  return codeopstutordevAPI.get(`/api/v1/user/`)
}
function api_v1_user_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/user/`, payload)
}
function api_v1_user_retrieve(payload) {
  return codeopstutordevAPI.get(`/api/v1/user/${payload.id}/`)
}
function api_v1_user_update(payload) {
  return codeopstutordevAPI.put(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_partial_update(payload) {
  return codeopstutordevAPI.patch(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_destroy(payload) {
  return codeopstutordevAPI.delete(`/api/v1/user/${payload.id}/`)
}
function api_v1_vulnerability_list(payload) {
  return codeopstutordevAPI.get(`/api/v1/vulnerability/`)
}
function api_v1_vulnerability_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/vulnerability/`, payload)
}
function api_v1_vulnerability_retrieve(payload) {
  return codeopstutordevAPI.get(`/api/v1/vulnerability/${payload.id}/`)
}
function api_v1_vulnerability_update(payload) {
  return codeopstutordevAPI.put(`/api/v1/vulnerability/${payload.id}/`, payload)
}
function api_v1_vulnerability_partial_update(payload) {
  return codeopstutordevAPI.patch(
    `/api/v1/vulnerability/${payload.id}/`,
    payload
  )
}
function api_v1_vulnerability_destroy(payload) {
  return codeopstutordevAPI.delete(`/api/v1/vulnerability/${payload.id}/`)
}
function api_v1_webhook_list(payload) {
  return codeopstutordevAPI.get(`/api/v1/webhook/`)
}
function api_v1_webhook_create(payload) {
  return codeopstutordevAPI.post(`/api/v1/webhook/`, payload)
}
function api_v1_webhook_retrieve(payload) {
  return codeopstutordevAPI.get(`/api/v1/webhook/${payload.id}/`)
}
function api_v1_webhook_update(payload) {
  return codeopstutordevAPI.put(`/api/v1/webhook/${payload.id}/`, payload)
}
function api_v1_webhook_partial_update(payload) {
  return codeopstutordevAPI.patch(`/api/v1/webhook/${payload.id}/`, payload)
}
function api_v1_webhook_destroy(payload) {
  return codeopstutordevAPI.delete(`/api/v1/webhook/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return codeopstutordevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return codeopstutordevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return codeopstutordevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return codeopstutordevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return codeopstutordevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return codeopstutordevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return codeopstutordevAPI.post(
    `/rest-auth/registration/resend-email/`,
    payload
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return codeopstutordevAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return codeopstutordevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return codeopstutordevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return codeopstutordevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_apiintegration_list,
  api_v1_apiintegration_create,
  api_v1_apiintegration_retrieve,
  api_v1_apiintegration_update,
  api_v1_apiintegration_partial_update,
  api_v1_apiintegration_destroy,
  api_v1_auditlog_list,
  api_v1_auditlog_create,
  api_v1_auditlog_retrieve,
  api_v1_auditlog_update,
  api_v1_auditlog_partial_update,
  api_v1_auditlog_destroy,
  api_v1_certification_list,
  api_v1_certification_create,
  api_v1_certification_retrieve,
  api_v1_certification_update,
  api_v1_certification_partial_update,
  api_v1_certification_destroy,
  api_v1_consultancysession_list,
  api_v1_consultancysession_create,
  api_v1_consultancysession_retrieve,
  api_v1_consultancysession_update,
  api_v1_consultancysession_partial_update,
  api_v1_consultancysession_destroy,
  api_v1_enterprise_list,
  api_v1_enterprise_create,
  api_v1_enterprise_retrieve,
  api_v1_enterprise_update,
  api_v1_enterprise_partial_update,
  api_v1_enterprise_destroy,
  api_v1_faq_list,
  api_v1_faq_create,
  api_v1_faq_retrieve,
  api_v1_faq_update,
  api_v1_faq_partial_update,
  api_v1_faq_destroy,
  api_v1_individualuser_list,
  api_v1_individualuser_create,
  api_v1_individualuser_retrieve,
  api_v1_individualuser_update,
  api_v1_individualuser_partial_update,
  api_v1_individualuser_destroy,
  api_v1_login_create,
  api_v1_metric_list,
  api_v1_metric_create,
  api_v1_metric_retrieve,
  api_v1_metric_update,
  api_v1_metric_partial_update,
  api_v1_metric_destroy,
  api_v1_module_list,
  api_v1_module_create,
  api_v1_module_retrieve,
  api_v1_module_update,
  api_v1_module_partial_update,
  api_v1_module_destroy,
  api_v1_project_list,
  api_v1_project_create,
  api_v1_project_retrieve,
  api_v1_project_update,
  api_v1_project_partial_update,
  api_v1_project_destroy,
  api_v1_report_list,
  api_v1_report_create,
  api_v1_report_retrieve,
  api_v1_report_update,
  api_v1_report_partial_update,
  api_v1_report_destroy,
  api_v1_signup_create,
  api_v1_ticket_list,
  api_v1_ticket_create,
  api_v1_ticket_retrieve,
  api_v1_ticket_update,
  api_v1_ticket_partial_update,
  api_v1_ticket_destroy,
  api_v1_user_list,
  api_v1_user_create,
  api_v1_user_retrieve,
  api_v1_user_update,
  api_v1_user_partial_update,
  api_v1_user_destroy,
  api_v1_vulnerability_list,
  api_v1_vulnerability_create,
  api_v1_vulnerability_retrieve,
  api_v1_vulnerability_update,
  api_v1_vulnerability_partial_update,
  api_v1_vulnerability_destroy,
  api_v1_webhook_list,
  api_v1_webhook_create,
  api_v1_webhook_retrieve,
  api_v1_webhook_update,
  api_v1_webhook_partial_update,
  api_v1_webhook_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
