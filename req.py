import requests

# Define the base URL of the API
base_url = "https://jsonplaceholder.typicode.com"

# Send a GET request to retrieve a list of posts
response = requests.get(f"{base_url}/posts")

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Parse the JSON response
    posts = response.json()

    # Display the first few posts
    for post in posts[:5]:
        print(f"Title: {post['title']}")

    # Add a new post
    new_post_data = {
        'title': 'New Post',
        'body': 'This is a new post.',
        'userId': 1
    }
    add_response = requests.post(f"{base_url}/posts", json=new_post_data)

    if add_response.status_code == 201:  # 201 status code indicates successful creation
        print("\nNew Post Added Successfully!")

        # Display the updated posts after adding a new post
        updated_response = requests.get(f"{base_url}/posts")
        updated_posts = updated_response.json()
        print("\nUpdated Posts after Adding:")
        for updated_post in updated_posts[:5]:
            print(f"Title: {updated_post['title']}")

        # Update the title of the newly added post
        post_to_update = updated_posts[-1]  # Assuming the last post is the newly added one
        update_data = {'title': 'Updated Post Title'}
        update_response = requests.put(f"{base_url}/posts/{post_to_update['id']}", json=update_data)

        if update_response.status_code == 200:
            print("\nPost Title Updated Successfully!")

            # Display the updated posts after updating the title
            updated_response_after_update = requests.get(f"{base_url}/posts")
            updated_posts_after_update = updated_response_after_update.json()
            print("\nUpdated Posts after Updating Title:")
            for updated_post_after_update in updated_posts_after_update[:5]:
                print(f"Title: {updated_post_after_update['title']}")

            # Delete the post
            delete_response = requests.delete(f"{base_url}/posts/{post_to_update['id']}")

            if delete_response.status_code == 200:
                print("\nPost Deleted Successfully!")

                # Display the updated posts after deleting the post
                updated_response_after_delete = requests.get(f"{base_url}/posts")
                updated_posts_after_delete = updated_response_after_delete.json()
                print("\nUpdated Posts after Deleting:")
                for updated_post_after_delete in updated_posts_after_delete[:5]:
                    print(f"Title: {updated_post_after_delete['title']}")
            else:
                print("\nError Deleting Post")
        else:
            print("\nError Updating Post Title")
    else:
        print("\nError Adding New Post")
else:
    print(f"Error: {response.status_code}")

# Note: Make sure to install the 'requests' library if you haven't already.
