# Slackr
[Live!](https://slackr.jackson-woods.com)

 Slackr is a single-page web app inspired by Slack and built in 10 days. Sign up to chat with friends and other users across multiple channels, private or public, or in direct messages. Users can create new channels or direct messages, and unsubscribe from the ones they don't want to see.

![home-page]()

## Feature Highlights

### Live Chat
Slackr's core feature is the ability to chat with coworkers or friends live in direct messages or public/private channels. 

![chat]()

### Create/Leave Channels
If you want to create a new channel or direct message, you can easily do so by filling out the new channel/direct message form and adding users. Search results are updated live and clicking one adds it to the list of users to be added to the room. Once created, feel free to hop in and chat with your coworkers or friends. Action-cables receives the room on the backend and handles the rest:

![create-room-form]()


```ruby
def speak_room(data) 
    new_room = Room.create(
      title: data['title'], 
      is_private: data['is_private'], 
      owner_id: data['owner_id'], 
      is_dm: data['is_dm']
      )
      RoomsChannel.broadcast_to('rooms_channel', new_room)
      if new_room.is_private || new_room.is_dm
        data['user_ids'].each do |user_id|
          RoomMembership.create(user_id: user_id, room_id: new_room.id)
        end
      else
        User.all.each do |user|
          RoomMembership.create(user_id: user.id, room_id: new_room.id)
        end
      end
  end
```

### Additional User Interface Highlights
Slackr features a flexible, intuitive UI that allows for seamless updating on elements when you or other users interact with elements you see.

When users log out that you are chatting with the status oth the chat changes to show they are logged out. If they create a room, you will imediately see it unless it's private and you are not invited:

![comment-dropdown]()

Then:

![editing-comment]()

Pressing 'enter' closes the form, and displays the comment again - with edits incorporated:

![editing-complete]()

A dedicated slice of Redux state tracks which comment (if any) is being edited by the current user, ensuring that only one comment can be edited at a time. This solution also simplifies the conditional rendering of comments in their static or editable forms:

```javascript
if (this.props.editing) {
  return (
    <EditCommentForm comment={this.state.comment} />
  );
}
```

Here, 'editing' refers to a Boolean representing the presence (or lack thereof) of a given comment's id in the 'editing comment' slice of state. If true, the comment renders as an edit form; if false, the comment renders as fixed text.

## Technologies Used
Favebook utilizes a PostgreSQL database and Rails 5 back end. The front end is built on React with Redux. User photo storage is handled by Amazon Web Services S3. Trending news articles are provided by [Action Cables](https://heroku-blog-files.s3.amazonaws.com/posts/1473343848-1462551406-rails-rack.png).

## Future Implementations
WIP features inlude:
+ Profile & banner picture uploads
+ Live notifications
+ Direct messaging