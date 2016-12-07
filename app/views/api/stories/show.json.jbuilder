
1.times do
  json.set! @story.id do
    json.partial! 'api/stories/story', story: @story
  end
end
