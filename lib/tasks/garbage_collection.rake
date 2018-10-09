task :garbage_collection => :environment do
    Room.all.each do |room|
        if room.member_ids.empty?
            room.destroy
        end
    end
end