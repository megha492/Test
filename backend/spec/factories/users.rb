FactoryGirl.define do
  factory(:user) do
    email { "testing123@gmail.com" }
    password { "password" }
    password_confirmation { "password" }
  end
end
