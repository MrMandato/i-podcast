import { filterPodcast } from "./podcast.util"

describe("filterPodcast", () => {
  test("returns an empty array if podcastElements is empty", () => {
    const podcastElements = []
    const search = "search"
    const result = filterPodcast(podcastElements, search)
    expect(result).toEqual([])
  })

  test("returns the original podcastElements if search is empty", () => {
    const podcastElements = [
      { "im:name": { label: "title1" }, "im:artist": { label: "artist1" } },
      { "im:name": { label: "title2" }, "im:artist": { label: "artist2" } },
    ]
    const search = ""
    const result = filterPodcast(podcastElements, search)
    expect(result).toEqual([
      { "im:name": { label: "title1" }, "im:artist": { label: "artist1" } },
      { "im:name": { label: "title2" }, "im:artist": { label: "artist2" } },
    ])
  })

  test("returns filtered podcastElements based on search", () => {
    const podcastElements = [
      { "im:name": { label: "title1" }, "im:artist": { label: "artist1" } },
      { "im:name": { label: "title2" }, "im:artist": { label: "artist2" } },
      { "im:name": { label: "title3" }, "im:artist": { label: "artist3" } },
    ]
    const search = "title2"
    const result = filterPodcast(podcastElements, search)
    expect(result).toEqual([
      { "im:name": { label: "title2" }, "im:artist": { label: "artist2" } },
    ])
  })

})
