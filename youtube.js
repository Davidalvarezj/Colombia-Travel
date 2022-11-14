const API = 'https://youtube-v2.p.rapidapi.com/channel/videos?channel_id=UCkrC0S42JiVf3EDFdfW27sg';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7dfd36274emshb343cce66f58ddbp1e93c3jsn31e92c8a584d',
		'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  console.log(data)
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);

    let view = `
    ${videos.videos.map(video => `
    <div class="col mb-4">
    <a href="https://www.youtube.com/watch?v=${video.video_id}" target="_blank">
    <div class="card youtubecard border-0" style="width: 18rem;height: 260px; box-shadow: 10px 10px 10px rgba(89, 90, 90, 0.05); ">
        <img class="card-img-top" src="${video.thumbnails[3].url}" alt="img1">
        <div class="card-body youtubecard">
        <p class="card-text text-secondary">${video.title}</p>
        </div>
    </div>
    </a>
    </div>
    `).slice(20,29).join('')}
    `;
    // console.log(view)
    content.innerHTML = view
  } catch (error){
    console.log(error)
  }
})();


    //   <div class="group relative bg-slate-100">
    //     <div class="w-full  aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
    //       <img src="${video.thumbnails[3].url}" alt="${video.title}" class="w-full">
    //     </div>
    //     <div class="mt-4 flex text-center pb-4">
    //       <h3 class="text-sm text-gray-700 text-center">
    //         ${video.title}
    //       </h3>
    //     </div>
    //   </div>