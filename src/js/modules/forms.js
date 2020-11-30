const forms = () => {
  const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input');

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся.',
    failure: 'Что-то пошло не так...'
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;

    let res = await fetch(url, {
      method: "POST",
      body: data
    });

    return await res.text();
  };

  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.append(statusMessage);

      const formData = new FormData(item);

      postData('assets/server.php', formData)
        .then(res => {
          console.log(res);
          // if (!res.ok) {
          //   throw new Error("Result isn't 200");
          // }
          statusMessage.textContent = message.success;
        })
        .catch(() => statusMessage.textContent = message.failure)
        .finally(() => {
          item.reset();
          setTimeout(() => {
            statusMessage.remove();
          }, 3000);
        });

    });
  });
};

export default forms;