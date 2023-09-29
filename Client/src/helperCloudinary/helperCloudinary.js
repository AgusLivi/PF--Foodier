const uploadImage = async (event) => {
    const files = event.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "preset-pf");
    
    const res = await fetch(
        "https://api.cloudinary.com/v1_1/foodiercloudinary/image/upload",
        {
            method: "POST",
            body: data,
        }
    )
    const file = await res.json();
    const response = file.secure_url;
    return response
};

export default uploadImage;