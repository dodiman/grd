	
// ========================================service==================================
	
	const getAll = () => {
		return http.get("/mydata/api_anggota");
	}

	const create = data => {
		return http.post("/mydata/api_anggota",data);
	}

	const detail = id => {
		return http.get(`/mydata/anggota_detail/${id}`)
	}

	const remove = id => {
		return http.delete(`/mydata/anggota_detail/${id}`);
	}

	// ====================================end service==================================