module Response
   def json_response(messages, is_success, data, status)
	render json:{
			messages: messages,
			is_success: is_success,
			data: data
		},status: status
   end
end


# {
#   "messages": "Projects Index",
#   "is_success": true,
#   "data": "[{\"id\":1,\"name\":\"Project1\",\"description\":\"Project1\",\"created_at\":\"2019-10-19T15:07:16.959Z\",\"updated_at\":\"2019-10-19T15:07:16.959Z\"},{\"id\":2,\"name\":\"string\",\"description\":\"string\",\"created_at\":\"2019-10-19T16:31:58.654Z\",\"updated_at\":\"2019-10-19T16:31:58.654Z\"},{\"id\":3,\"name\":null,\"description\":\"string\",\"created_at\":\"2019-10-19T17:44:21.927Z\",\"updated_at\":\"2019-10-19T17:44:21.927Z\"}]"
# }

# [
#   {
#     "id": 1,
#     "name": "Project1",
#     "description": "Project1"
#   },
#   {
#     "id": 2,
#     "name": "string",
#     "description": "string"
#   },
#   {
#     "id": 3,
#     "name": null,
#     "description": "string"
#   }
# ]