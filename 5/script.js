const func = async () => {
  const data = await fetch("https://дмип.рф/api2.php?login=aW5kcmEua2RwYWVnaXNAbWFpbC5ydQ%3D%3D&password=cXdpbDYwOV9sYU4%3D&app=112233&type=auth")
    .then((res) => res.json())
    .then((data) => data);
  console.log(data);
  document.body.innerHTML = `<h1>${data.title}</h1><p></p>`;
}

func();