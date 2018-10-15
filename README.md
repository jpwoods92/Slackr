# Slackr
[Live!](https://slackr.jackson-woods.com)

 Slackr is a single-page web app inspired by Slack and built in 10 days. Sign up to chat with friends and other users across multiple channels, private or public, or in direct messages. Users can create new channels or direct messages, and unsubscribe from the ones they don't want to see.

![home-page](https://raw.githubusercontent.com/jpwoods92/Slackr/master/app/assets/images/home-page.png)

## Feature Highlights

### Live Chat
Slackr's core feature is the ability to chat with coworkers or friends live in direct messages or public/private channels. 

![chat](https://raw.githubusercontent.com/jpwoods92/Slackr/master/app/assets/images/chat.png)

### Create/Leave Channels
If you want to create a new channel or direct message, you can easily do so by filling out the new channel/direct message form and adding users. Search results are updated live and clicking one adds it to the list of users to be added to the room. Once created, feel free to hop in and chat with your coworkers or friends. Action-cables receives the room on the backend and handles the rest:

![create-room-form](https://raw.githubusercontent.com/jpwoods92/Slackr/master/app/assets/images/create-room-form.png)


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

![logged-in](https://raw.githubusercontent.com/jpwoods92/Slackr/master/app/assets/images/before.png)

Then:

![logged-out](https://raw.githubusercontent.com/jpwoods92/Slackr/master/app/assets/images/after.png)


## Technologies Used
Slackr utilizes a PostgreSQL database and Rails 5 back end. The front end is built on React with Redux. Live updating of features is handled by Action-cables web-socketing. 
![Action Cables](https://heroku-blog-files.s3.amazonaws.com/posts/1473343848-1462551406-rails-rack.png)

## Future Implementations
WIP features inlude:
+ Profile & banner picture uploads
+ Live notifications
+ Direct messaging