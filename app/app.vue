<template>
  <div class="min-h-screen text-slate-700 font-body relative">
    
    <div class="fixed inset-0 -z-10 bg-gradient-to-br from-slate-50 via-[#B3CEE5]/20 to-[#F7CAC9]/20">
      <div class="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[#F7CAC9]/40 blur-[120px]"></div>
      <div class="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[#B3CEE5]/40 blur-[120px]"></div>
      <div class="absolute -bottom-[10%] right-[10%] w-[700px] h-[700px] rounded-full bg-blue-100/50 blur-[150px]"></div>
    </div>

    <header class="fixed top-4 md:top-6 left-0 w-full flex justify-center z-[100] px-2 md:px-4">
      <nav class="max-w-[95%] overflow-x-auto bg-slate-900/90 backdrop-blur-xl border border-white/10 p-1 md:p-1.5 rounded-full shadow-2xl flex items-center gap-1 md:gap-2 transition-all duration-500 hover:scale-105 scrollbar-hide">
        <a 
          v-for="item in menuItems" 
          :key="item.id"
          :href="'#' + item.id"
          @click="klikMenu($event, item.id)"
          :class="[
            'px-3 py-1.5 md:px-5 md:py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-500 ease-in-out whitespace-nowrap',
            activeSection === item.id 
              ? 'bg-white text-slate-900 shadow-lg' 
              : 'text-white/70 hover:text-white hover:bg-white/10'
          ]"
        >
          {{ item.label }}
        </a>
      </nav>
    </header>

    <main>
      <section id="beranda" class="relative min-h-screen flex items-center justify-center px-8 md:px-24 overflow-hidden pt-20 md:pt-0">
  <div class="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-4 z-10 relative">
    
    <div class="flex-1 w-full text-center md:text-left">
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-slate-800 font-heading leading-tight">
        Halo, Saya <br/>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500">
          M. Ramadhan Kurniawan
        </span>
      </h1>
      <p class="text-base md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto md:mx-0">
        Welcome to my world of technical documentation.
      </p>
      <div class="flex flex-wrap justify-center md:justify-start gap-4 font-heading">
          <a href="#penugasan" class="px-8 py-4 bg-slate-800 text-white font-bold rounded-full hover:bg-slate-700 transition-all shadow-lg">Lihat Tugas</a>
          <a href="#profil" class="px-8 py-4 bg-white/40 backdrop-blur-md text-slate-800 font-bold rounded-full border border-white/60 hover:bg-white/60 transition-all shadow-sm">Tentang Saya</a>
      </div>
    </div>

    <div class="flex-1 flex justify-center md:justify-end w-full relative py-10 md:py-0">
      <div class="relative w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] animate-float">
        <div class="absolute inset-0 bg-slate-400/40 blur-[50px] rounded-full"></div>
        
        <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-slate-800 via-slate-400 to-slate-100 shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.4)] overflow-hidden animate-rotasi-pelan">
          
          <div class="absolute top-[20%] left-[25%] w-[20%] h-[20%] bg-slate-900/20 rounded-full shadow-[inset_3px_3px_6px_rgba(0,0,0,0.3)]"></div>
          <div class="absolute top-[45%] right-[20%] w-[25%] h-[25%] bg-slate-900/15 rounded-full shadow-[inset_-2px_-3px_6px_rgba(0,0,0,0.2)]"></div>
          <div class="absolute bottom-[20%] left-[35%] w-[15%] h-[15%] bg-slate-900/20 rounded-full shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3)]"></div>
          <div class="absolute top-[35%] right-[50%] w-[10%] h-[10%] bg-slate-900/10 rounded-full shadow-[inset_1px_1px_3px_rgba(0,0,0,0.2)]"></div>
          
        </div>
      </div>
    </div>

  </div>
</section>

      <section id="profil" class="py-24 px-8 max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500 inline-block"> Profil Diri </h2>
          <div class="w-24 h-1 bg-[#F7CAC9] mx-auto mt-4 rounded-full"></div>
        </div>
        <div class="bg-white/60 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-sm border border-white/50 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <img src="/pas.png" class="w-44 h-44 md:w-56 md:h-56 rounded-full border-4 border-white shadow-lg object-cover">
          <div class="flex-1 text-center md:text-left">
            <h3 class="text-3xl font-bold text-slate-800 font-heading">M. Ramadhan Kurniawan</h3>
            <p class="text-slate-500 font-bold mb-4 uppercase tracking-wider text-sm">Mahasiswa D4 Teknik Informatika</p>
            <p class="text-lg leading-relaxed text-slate-600 italic">
              "A dedicated Informatics Engineering student with a strong focus on technical documentation and system analysis. I thrive in structured environments and am committed to bridging the gap between complex data and clear, actionable insights through meticulous administration and logical problem-solving."
            </p>
          </div>
        </div>
      </section>

      <section id="skill" class="py-24 px-8 max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500 inline-block"> Skill & Minat </h2>
          <div class="w-24 h-1 bg-[#F7CAC9] mx-auto mt-4 rounded-full"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white/60 backdrop-blur-md p-8 rounded-3xl border-t-4 border-slate-800 shadow-sm">
            <h3 class="text-2xl font-bold text-slate-800 mb-4">Administration</h3>
            <p class="text-slate-600">Terampil dalam pengelolaan dokumen teknis dan manajemen alur kerja sistematis untuk efisiensi operasional.</p>
          </div>
          <div class="bg-white/60 backdrop-blur-md p-8 rounded-3xl border-t-4 border-[#F7CAC9] shadow-sm">
            <h3 class="text-2xl font-bold text-slate-800 mb-4">Critical Thinking</h3>
            <p class="text-slate-600">Mampu mengevaluasi informasi secara objektif dan mengidentifikasi pola untuk pengambilan keputusan berbasis data.</p>
          </div>
          <div class="bg-white/60 backdrop-blur-md p-8 rounded-3xl border-t-4 border-slate-500 shadow-sm">
            <h3 class="text-2xl font-bold text-slate-800 mb-4">Problem Solving</h3>
            <p class="text-slate-600">Berorientasi pada solusi teknis dengan memecah masalah kompleks menjadi langkah-langkah terukur.</p>
          </div>
        </div>
      </section>

      <section id="penugasan" class="py-24 px-8 max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500 inline-block"> Penugasan </h2>
          <div class="w-24 h-1 bg-[#F7CAC9] mx-auto mt-4 rounded-full"></div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div class="bg-white/60 backdrop-blur-md rounded-3xl p-6 border border-white/50 flex flex-col justify-between shadow-sm">
            <div>
              <span class="text-xs font-bold text-slate-400 uppercase">Tugas 02</span>
              <h3 class="text-xl font-bold text-slate-800 mb-2">Tugas TOR</h3>
              <p class="text-slate-600 text-sm mb-6">Penyusunan Term of Reference (TOR) untuk manajemen proyek.</p>
            </div>
            <div class="flex flex-col gap-2">
              <button @click="bukaModal('Tugas TOR', 'Dokumentasi Proyek', 'File PDF', '/tor.pdf')" class="w-full py-2 bg-slate-800 text-white rounded-xl text-sm font-semibold hover:bg-slate-700 transition-colors">Preview</button>
              <a href="/tor.pdf" download class="w-full py-2 border border-slate-300 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-100 text-center">Download</a>
            </div>
          </div>
          <div class="bg-white/60 backdrop-blur-md rounded-3xl p-6 border border-white/50 flex flex-col justify-between shadow-sm">
            <div>
              <span class="text-xs font-bold text-slate-400 uppercase">Tugas 03</span>
              <h3 class="text-xl font-bold text-slate-800 mb-2">Tugas Infografis</h3>
              <p class="text-slate-600 text-sm mb-6">Visualisasi data ke dalam bentuk infografis yang informatif.</p>
            </div>
            <div class="flex flex-col gap-2">
              <button @click="bukaModal('Tugas Infografis', 'Visualisasi Data', 'Image PNG', '/infografis.png')" class="w-full py-2 bg-slate-800 text-white rounded-xl text-sm font-semibold hover:bg-slate-700 transition-colors">Preview</button>
              <a href="/infografis.png" download class="w-full py-2 border border-slate-300 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-100 text-center">Download</a>
            </div>
          </div>
          <div class="bg-white/60 backdrop-blur-md rounded-3xl p-6 border border-white/50 flex flex-col justify-between shadow-sm">
            <div>
              <span class="text-xs font-bold text-slate-400 uppercase">Tugas 04</span>
              <h3 class="text-xl font-bold text-slate-800 mb-2">Tugas Video</h3>
              <p class="text-slate-600 text-sm mb-6">Produksi video pendek sebagai media penyampaian informasi teknis.</p>
            </div>
            <div class="flex flex-col gap-2">
              <button @click="bukaModal('Tugas Video', 'Multimedia Content', 'Video MP4', '/tugas4.mp4')" class="w-full py-2 bg-slate-800 text-white rounded-xl text-sm font-semibold hover:bg-slate-700 transition-colors">Preview</button>
              <a href="/tugas4.mp4" download class="w-full py-2 border border-slate-300 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-100 text-center">Download</a>
            </div>
          </div>
        </div>
      </section>

      <section id="project" class="py-24 px-8 max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500 inline-block"> Project & Karya </h2>
          <div class="w-24 h-1 bg-[#F7CAC9] mx-auto mt-4 rounded-full"></div>
          <p class="text-slate-500 mt-4 max-w-2xl mx-auto">Kumpulan tugas besar, pengembangan sistem, dan eksperimen teknis yang pernah saya kerjakan.</p>
        </div>

        <div class="flex justify-center">
          
          <div class="bg-white/60 backdrop-blur-md rounded-[2rem] border border-white/50 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col max-w-lg">
            <div class="h-56 overflow-hidden relative bg-slate-900 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" alt="C++ Code Terminal" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-20 h-20 bg-blue-600/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg border border-white/20">
                  C++
                </div>
              </div>
            </div>
            
            <div class="p-8 flex flex-col flex-1">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-2xl font-bold text-slate-800">Kalkulator Emisi Karbon</h3>
              </div>
              <p class="text-sm font-bold text-[#F7CAC9] uppercase tracking-wider mb-4">Tugas Besar Dasar-Dasar Pemrograman</p>
              
              <p class="text-slate-600 mb-6 flex-1 text-sm md:text-base leading-relaxed text-center">
                Program berbasis Command Line Interface (CLI) untuk menghitung total emisi karbon (kg CO2) dari sivitas akademika. Dilengkapi fitur manajemen data, filter komprehensif, dan pengurutan data otomatis menggunakan algoritma Merge Sort.
              </p>
              
              <div class="flex flex-wrap justify-center gap-2 mb-8">
                <span class="px-3 py-1.5 bg-slate-800 text-white text-xs font-bold rounded-lg">C++</span>
                <span class="px-3 py-1.5 bg-blue-100/50 border border-blue-200 text-[#1E3A8A] text-xs font-bold rounded-lg">Merge Sort Algorithm</span>
                <span class="px-3 py-1.5 bg-blue-100/50 border border-blue-200 text-[#1E3A8A] text-xs font-bold rounded-lg">CLI Application</span>
              </div>
              
              <div class="flex gap-4 mt-auto">
                <a href="https://github.com/ramarrk/kalkulator-emisi-karbon" target="_blank" class="flex-1 py-3 bg-slate-800 text-white rounded-xl text-sm font-bold text-center hover:bg-slate-700 transition-colors shadow-md">Lihat Source Code</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="kontak" class="py-24 px-8 max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold font-heading text-slate-800">Hubungi Saya</h2>
          <div class="w-24 h-1 bg-[#F7CAC9] mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <a href="https://github.com/ramarrk" target="_blank" class="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group flex flex-col items-center">
            <div class="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </div>
            <h4 class="text-xl font-bold text-[#1E3A8A] mb-2">GitHub</h4>
            <p class="text-sm text-slate-500">@ramarrk</p>
          </a>

          <a href="https://instagram.com/ramakruw" target="_blank" class="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group flex flex-col items-center">
            <div class="w-16 h-16 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-full flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </div>
            <h4 class="text-xl font-bold text-[#1E3A8A] mb-2">Instagram</h4>
            <p class="text-sm text-slate-500">@ramakruw</p>
          </a>

          <a href="https://wa.me/6285941282814" target="_blank" class="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group flex flex-col items-center">
            <div class="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.675 1.436 5.662 1.436h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </div>
            <h4 class="text-xl font-bold text-[#1E3A8A] mb-2">WhatsApp</h4>
            <p class="text-sm text-slate-500">0859-4128-2814</p>
          </a>

          <a href="https://www.linkedin.com/in/m-ramadhan-kurniawan-74a5a9318" target="_blank" class="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(250,204,21,0.5)] hover:-translate-y-2 transition-all duration-300 text-center group flex flex-col items-center relative">
            <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-yellow-400 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"></div>
            
            <div class="w-16 h-16 bg-[#0077B5] rounded-full flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300 relative z-10">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </div>
            <h4 class="text-xl font-bold text-[#1E3A8A] mb-2 relative z-10">LinkedIn</h4>
            <p class="text-sm text-slate-500 leading-tight relative z-10">M. Ramadhan Kurniawan</p>
          </a>
        </div>

        <div class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2rem] p-8 md:p-12 text-center shadow-xl border border-white/10 relative overflow-hidden group">
          <div class="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
          <div class="absolute bottom-0 left-0 w-64 h-64 bg-[#F7CAC9]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

          <div class="relative z-10">
            <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
              <span class="text-[#F7CAC9]">Email:</span> 
              <a href="mailto:m.ramadhan.tif425@polban.ac.id" class="hover:text-blue-300 transition-colors duration-300 ml-2 border-b-2 border-transparent hover:border-blue-300">
                m.ramadhan.tif425@polban.ac.id
              </a>
            </h3>
            <p class="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Let's connect!
            </p>
          </div>
        </div>
      </section>
    </main> <footer class="bg-white/10 text-center py-6 border-t mt-24">
      <p>&copy; 2026 M. Ramadhan Kurniawan.</p>
    </footer>

    <div v-if="isModalOpen" @click.self="tutupModal" class="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
      <div class="bg-white rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col">
        <button @click="tutupModal" class="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">✕</button>
        <h3 class="text-2xl font-bold mb-4 text-slate-800">{{ tugasTerpilih.judul }}</h3>
        
        <div class="flex-1 overflow-y-auto bg-slate-50 rounded-xl mb-4 text-center p-2 min-h-[400px] flex items-center justify-center">
          <embed 
            v-if="tugasTerpilih.type === 'pdf'" 
            :src="tugasTerpilih.fileUrl" 
            type="application/pdf" 
            class="w-full h-[500px] rounded-lg" 
          />
          
          <img 
            v-else-if="tugasTerpilih.type === 'image'" 
            :src="tugasTerpilih.fileUrl" 
            class="max-w-full h-auto rounded-lg mx-auto shadow-md" 
          />
          
          <video v-else-if="tugasTerpilih.type === 'video'" controls class="w-full rounded-lg shadow-md">
            <source :src="tugasTerpilih.fileUrl" type="video/mp4">
          </video>

          <p v-else class="text-slate-500 font-medium">Preview tidak tersedia untuk format ini.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600 border-t pt-4">
          <p><strong>Deskripsi:</strong> {{ tugasTerpilih.tujuan }}</p>
          <p><strong>Format:</strong> {{ tugasTerpilih.hasil }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const menuItems = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'profil', label: 'Profil' },
  { id: 'skill', label: 'Skill' },
  { id: 'penugasan', label: 'Tugas' },
  { id: 'project', label: 'Project' },
  { id: 'kontak', label: 'Kontak' }
]

const activeSection = ref('beranda')
const isModalOpen = ref(false)
const tugasTerpilih = ref({ judul: '', tujuan: '', hasil: '', fileUrl: '', type: '' })

const bukaModal = (judul: string, tujuan: string, hasil: string, fileUrl: string) => {
  let type = 'pdf'
  if (fileUrl.endsWith('.png') || fileUrl.endsWith('.jpg')) type = 'image'
  if (fileUrl.endsWith('.mp4')) type = 'video'
  
  tugasTerpilih.value = { judul, tujuan, hasil, fileUrl, type }
  isModalOpen.value = true
}

const tutupModal = () => { isModalOpen.value = false }

const klikMenu = (e: Event, id: string) => {
  e.preventDefault()
  activeSection.value = id
  const el = document.getElementById(id)
  if (el) { el.scrollIntoView({ behavior: 'smooth' }) }
}

onMounted(() => {
  const observerOptions = { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { activeSection.value = entry.target.id }
    })
  }, observerOptions)
  menuItems.forEach((item) => {
    const el = document.getElementById(item.id)
    if (el) observer.observe(el)
  })
})
</script>

<style>
html { scroll-behavior: smooth; }
section { scroll-margin-top: 100px; }

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>