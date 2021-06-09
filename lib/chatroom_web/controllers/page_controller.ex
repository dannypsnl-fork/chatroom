defmodule ChatroomWeb.PageController do
  use ChatroomWeb, :controller
  alias Chatroom.Chats

  def index(conn, _params) do
    messages = Chats.list_messages()
    render(conn, "index.html", messages: messages)
  end
end
