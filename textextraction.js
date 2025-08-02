const submitButton = document.getElementById('submitbutton');
const submitButton1 = document.getElementById('submitbutton1');

submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const videoData = document.getElementById('videoid').files[0];
  const formData = new FormData();
  formData.append('video', videoData);

  try {
    const response = await fetch('http://localhost:5000/video_convert', {
      method: 'POST',
      body: formData
    });
    const dataRes = await response.json();
    document.getElementById('text-output').innerText = dataRes['data'];
  } catch (error) {
    console.error('Error:', error);
  }
});

document.getElementById('downloadButton').addEventListener('click', function () {
  const link = document.createElement('a');
  link.download = 'video-output.docx';
  link.href = 'Batch14.docx';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

submitButton1.addEventListener('click', async (e) => {
  e.preventDefault();
  const imageData = document.getElementById('image').files[0];
  const formData = new FormData();
  formData.append('image', imageData);

  try {
    const response = await fetch('http://localhost:5000/image_convert', {
      method: 'POST',
      body: formData
    });
    const dataRes1 = await response.json();
    document.getElementById('text-output1').innerText = dataRes1['data'];
  } catch (error) {
    console.error('Error:', error);
  }
});

document.getElementById('downloadButton1').addEventListener('click', function () {
  const link = document.createElement('a');
  link.download = 'image-output.docx';
  link.href = 'Batch1.docx';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
