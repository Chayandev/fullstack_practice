def secure(func):
    def wrapper(*args, **kwargs):
        jwt_token = kwargs.get('jwt_token')
        if jwt_token != "valid_token":
            return "Unauthorized"
        return func(*args, **kwargs)
    return wrapper

@secure
def get_user_data(user_id, jwt_token=None):
    return f"User data for user_id: {user_id}"

print(get_user_data(123))  # Output: Unauthorized
print(get_user_data(123, jwt_token="valid_token"))    # Output: User data for user_id: 123