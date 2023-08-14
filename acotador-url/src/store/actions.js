export function add(state, action) {
  const url = action.data;
  const shortUrl = getRandomURL();
  const temp = [...state.items];
  const newItem = {
    url: url.toString(),
    shortUrl: shortUrl,
    views: 0,
  };
  temp.unshift(newItem);
  return { items: [...temp] };
}
export function load(state, action) {}
export function addView(state, action) {}
