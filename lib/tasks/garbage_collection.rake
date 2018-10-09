task :garbage_collection => :environment do
    Room.all.each do |room|
        if room.is_dm && room.member_ids.empty?
            room.destroy
        end
    end
end