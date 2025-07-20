
/// sekarang kita akan membuat program angkot dengan dom 
// buat function untuk tambah penumpang , hapus penumpang ,  dan array yang menyimpan nama penumpang 
const cash = Array.from(document.querySelectorAll('.kas'))
console.log(cash)

function Angkot (penumpang, rute, kas) {
    
    this.penumpang = penumpang
    this.rute = rute
    this.kas = kas
    
    let kursi = Array.from(document.querySelectorAll('.k') )
    kursi.shift()
    const cash1 = document.querySelectorAll('.kas')[0]
    const cash = Array.from(document.querySelectorAll('.kas'))
    cash.shift()




    // card 2 //
    
    const parent = document.getElementsByClassName('tombol')[1]
    this.kursiAdd = function (nama) {
        const divBaru = document.createElement('div')
        divBaru.setAttribute('class', 'dot')
        divBaru.classList.add('kursi-')
        divBaru.classList.toggle('green')
        divBaru.style.color = 'white'
        divBaru.textContent = nama

        // masukan
        parent.appendChild(divBaru)
        // 
    }

    
    this.tambahPenumpang = function (nama) {
        // jika tidak ada penumpang
        if (penumpang.length == 0) {
            alert('Penumpang Kosong')
            //  sekarang kita masukan penumpang ke awal kursi
            penumpang.unshift(nama) 
            kursi[0].textContent = nama
            kursi[0].classList.toggle('merah')
            kursi[0].classList.toggle('green')
            this.kursiAdd(nama)
            // let hasil = kursi.map(function(k, indeks) {
            //     return k.textContent = nama
            // })
            console.log(`Penumpang saat ini : ${penumpang}`) 
        }
        //  kalau ada penumpang 
        else {
            // check apakah ada kursi kosong
            let checkKursiKosong = kursi.findIndex(function(k, indeks) {
                return k.textContent == 'Empty'
            })
            //  check nama duplicate 
            let checkduplicate = kursi.findIndex(function(k, i) {
                return k.textContent == nama
            })
            // check apakah semua kursi sudah penuh
            let checkKursiPenuh = kursi.every(function(k, indeks) {
                return k.textContent !== 'Empty'
            })
            if (checkduplicate !== -1) {
                alert('Nama penumpang sama, tidak masuk')
                console.log(`Penumpang saat ini : ${penumpang}\n Nama yg sama : ${nama}`) 
            }
            else if (checkKursiKosong !== -1) {
                alert(`ada kursi kosong kursi ke : ${checkKursiKosong+1}`)
                penumpang.push(nama)
                kursi[checkKursiKosong].textContent = nama
                kursi[checkKursiKosong].classList.toggle('green')
                //  kita mau setiap di klik akan buat box card kecil di card 2 kursi
                this.kursiAdd(nama)


                console.log(`Penumpang saat ini : ${penumpang}\nPenumpang dimasukan : ${nama}`) 
            } 
            else if (checkKursiPenuh !== -1) {
                alert(`Maaf kursi sudah terisi semua !`)
            }
        }
    }


    this.hapusPenumpang = function (nama, bayar) {
        // jika penumpang kosong 
        
        if (penumpang.length == 0) {
            alert(`Tidak ada penumpang !`)
    
         }

         else {
            // kalau nama nya sesuai 
            let Checkname = kursi.findIndex(function(k, indeks) {
                return k.textContent == nama
            })

            if (Checkname !== -1) {
                alert(`Nama sesuai ${kursi[Checkname].textContent}`)
                // kita hapus user itu
                penumpang[Checkname] = 'Empty'
                kursi[Checkname].textContent = 'Empty'
                kursi[Checkname].classList.remove('green')
                kursi[Checkname].classList.add('merah')

                let kursiC2 = Array.from(document.querySelectorAll('.kursi-') )
                parent.removeChild(kursiC2[Checkname])

                // bayar
                this.kas += bayar // ini kunci pembayaran
                cash1.textContent = `${Angkot1.kas}K`
                cash.forEach(function(c, indeks) {
                    c.textContent = `Rp.${Angkot1.kas},000`
                })

                
            }
            //  kalau namanya tidak sesuai    
            else if (Checkname == -1) {
                alert(`Nama tidak sesuai`)
            }
            console.log(`Penumpang saat ini : ${penumpang}`)
        }
    }
}

let Angkot1 = new Angkot( 
    // ['Ss', 'Roy', 'Frans', 'Naruto', 'Sasuke', 'Sakura', 'Kakashi', 'Kawaki'],
    [],
    ['Sunter >>> Pluit'],
    0             
 )
 // ini untuk random nama 
 function randomNama () {
    const nama = ['Ss', 'Frans', 'Naruto', 'Sasuke', 'Sakura','Kakashi', 'Kawaki']  
    const random = Math.floor(Math.random() * nama.length)
    // return hasil 
    return nama[random]
 }
 function randomDriver () {

    function driverRute() {
        const nama = [
            {Driver : 'Pak Roni', Titik : 'Sunter', Tujuan : 'Pluit'}, // indeks 0
            {Driver : 'Pak Jul', Titik : 'Bekasi', Tujuan : 'Cikampek'},  // indeks 1
            {Driver : 'Pak Gilang', Titik : 'Tanah Abang', Tujuan : 'Pluit'},  // indeks 2
            {Driver : 'Pak Gaga',Titik : 'Tanah Gersang', Tujuan : 'Cikampek'}  // indeks 3
        ]  
        const random = Math.floor(Math.random() * nama.length)
        let driver = nama[random]
        return driver 
    }

    // return hasil 
    function bayarH(driver) {
        let bayar = ''
        if ( driver.Driver== 'Pak Roni') {
            bayar += "5,000"
        }
        else if (driver.Driver == 'Pak Jul') {
            bayar += '10,000'
        }
        else if (driver.Driver == 'Pak Gilang') {
            bayar += '15,000'
        }
        else if (driver.Driver == 'Pak Gaga') {
            bayar += '20,000'
        }
        return parseInt(bayar)
    }
    return {
        bayarH,
        driverRute
    }
    
 }


let tombolTambah = document.querySelector('.kursi:nth-child(9)')
let tombolHapus = document.querySelector('.kursi:nth-child(10)')
let tombolDriver = document.querySelector('.kursi:nth-child(11)')
tombolTambah.addEventListener('click', function(event) {
    alert('click')
    // masukan nama random 
    Angkot1.tambahPenumpang(randomNama())
})

let random = randomDriver()
let selectedDriver = random.driverRute()  // panggil sekali kita simpan di variabel karena agar nilai math randomnya konsisten
console.log(selectedDriver)
tombolHapus.addEventListener('click', function(event) {
    alert('click')
    
    Angkot1.hapusPenumpang(randomNama(), random.bayarH(selectedDriver))
})

tombolDriver.addEventListener('click', function(event) {
    alert('click')
    // ambil target 
    const driver = document.querySelector('div#driver p:nth-child(2)')
    const rute = document.querySelector('div#route p:nth-child(2)')
    const tarifNo = document.querySelector('.tarif')
    const driverC2 = document.querySelectorAll('bold')
    const ruteC2 = document.querySelectorAll('div#titik')
    const tujuanC2 = document.querySelectorAll('div#tujuan')
    const arrow = document.getElementById('arrow')

    
    
    // let randomDrivers = randomDriver().driverRute().Driver
    // let randomrute = randomDriver().driverRute().Rute
    
    // ubah text content sesuai driver 
    driver.textContent = selectedDriver.Driver 
    driverC2.forEach(function(d, indeks) {
        d.textContent = selectedDriver.Driver
    })
    
    //  ubah text rute sesuai driver 
    rute.textContent = `${selectedDriver.Titik} ${arrow.textContent} ${selectedDriver.Tujuan}`
    
    // ubah text cash sesuai rute
    tarifNo.textContent = `${random.bayarH(selectedDriver)}K` 
    // cash.textContent = random.bayarH(selectedDriver)

    // ubah text tujuan dan titik card 2 
    ruteC2.forEach(function(r, indeks) {
        r.textContent = selectedDriver.Titik
    })
    tujuanC2.forEach(function(t, indeks) {
        t.textContent = selectedDriver.Tujuan
    })

    
})




























// function coba(nama) {
//     const angkot = [];
//     function tambahkan() {
//         angkot.push(({ name: nama, kelas: 2 }), ({ biaya: 200, nilai: 2 }))
//         console.log(angkot)
//     }

//     function tampilkan() {
//         angkot.forEach(function (elemen, indeks) {
//             console.table(elemen)
//         })

//     }

//     return {
//         tambahkan,
//         tampilkan
//     };


// }
// let c = coba('Yaldriyan')
// c.tambahkan()
// c.tampilkan()


// const Mahasiswa = function () {
//     this.nama = 'sandika'
//     this.umur = 20
//     this.kelas = 9

//     this.sayHello =  function() {
//         console.log(`Halo ${this.nama}, kamu adalah siswa kelas : ${this.kelas}`)
//         console.log(this)
//     }

//     setInterval( function(){
//         // disini kalau pakai constructor elemen , jadi this nya global
//         // console.log(this) /// outputnya undefinded, global scope
//     })
//     setInterval( () => {
//         // disini kalau pakai arrow elemen , jadi this nya lexical scope
//         // console.log(this) // output nya ada mahasiswa itu sndiri
//     })

// }

// const Yaldriyan = new Mahasiswa()



// const mhs1 = {
//     nama : 'Yaldriyan',
//     kelas : 1,
//     sayhello:   () => {
//         console.log(this)
//         console.log(`Halo ${this}, kamu adalah siswa kelas : ${this.kelas}`)
//     }


// }


window.addEventListener('load', function() {

    const card = document.querySelectorAll('.card') 
    

    console.log(card)
    card.forEach(function(elemenCard,indeks) {
        setTimeout(function() {
            elemenCard.classList.add('card-expand-width')
        },100)

        setTimeout(function(){
            elemenCard.classList.add('hover') 
        },700)
    })
    
    
})


// function hitung(angka) {
    
//     let jam = Math.floor(angka / 3600)
//     let menit = Math.floor((angka % 3600) / 60)
//     let detik = angka % 60
//     console.log(jam)
//     console.log(menit)
//     console.log(detik)
    
//  // atau 
//     let number = angka
//     let jamm = Math.floor(number / 3600)
//     number = number - (jamm * 3600) // ini sisanya 
//     console.log(number) // 1092 detik 

//     let menitt = Math.floor(number / 60) // 18 menit
//     let detikk = number - (menit * 60)  // 12 detik
//     console.log(jamm)
//     console.log(menitt)
//     console.log(detikk)
// }


// hitung(8292)



