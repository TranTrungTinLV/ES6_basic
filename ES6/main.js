// s

// //OOP 
// class HocSinh_ {
//     MaHS;
//     TenHS;
    
//     constructor(mahs,tenhs){
//         this.MaHS = mahs;
//         this.TenHS = tenhs;
//     }
// }
// let hs1 = new HocSinh_(1,'Trần trung Tín');
// console.log(hs1);
// //Super() trong OOP đại diện cho Lớp cha để gọi lại constructor hoặc method
// //Ví dự tính kế thừa 
// class NhanVien{
//     maNV;
//     tenNV;
//     constructor(maNV,tenNV)
//     {
//         this.maNV = maNV;
//         this.tenNV = tenNV;

//     }
//     tinhLuong(){
//         return 1000;
//     }
// }
// class QuanLy extends NhanVien{ //QuanLy kế thừa từ Nhân Viên
//     dsPhongBan = [];
//     constructor(manv,tennv,mangPhongBan){
//         super(manv,tennv);
//         this.dsPhongBan = mangPhongBan;
//     }
//     tinhLuong(){
//         return super.tinhLuong() + 1000
//     }
// }

// let qly  = new QuanLy(1,'Trần Tín',12);
// console.log(qly);

//FILTER XỬ LÝ MẢNG
let mangSanPham = [
    {MaSP:1,TenSp:'iPhone Plus 14 Plus Pro',Gia:10000,HangSX:'SONY'},
    {MaSP:2,TenSp:'iPhone Plus 15 Plus Pro',Gia:120000,HangSX:'APPLE'},
    {MaSP:3,TenSp:'iPhone Plus 16 Plus Pro',Gia:130000,HangSX:'NOKIA'},
    {MaSP:4,TenSp:'iPhone Plus 17 Plus Pro',Gia:140000,HangSX:'SONY'},
    {MaSP:5,TenSp:'iPhone Plus 18 Plus Pro',Gia:150000,HangSX:'SONY'},
    {MaSP:6,TenSp:'iPhone Plus 19 Plus Pro',Gia:160000,HangSX:'APPLE'},
    {MaSP:7,TenSp:'iPhone Plus 20 Plus Pro',Gia:170000,HangSX:'NOKIA'},
    {MaSP:8,TenSp:'iPhone Plus 21 Plus Pro',Gia:180000,HangSX:'TOSHIBA'},
    {MaSP:9,TenSp:'iPhone Plus 22 Plus Pro',Gia:190000,HangSX:'VIETNAM'},
] 

// yêu cầu là lấy ra các sản phẩm thuộc hảng sản xuất SONY
// let mangDienThoaiSony = mangSanPham.filter(sp => sp.HangSX === 'SONY');
// console.log(mangDienThoaiSony);

// // //sử dụng find() để  tìm một đối tượng
// let MaIDdienThoai = mangSanPham.find(sp=>sp.MaSP === 1)
// console.log(MaIDdienThoai);

// //sử dụng findIndex() để tìm tương ứng với index phần tử, vị trí phần tử trong mảng
// let indexDienThoai = mangSanPham.findIndex(sp=>sp.MaSP === 1)
// console.log(indexDienThoai);

//sử dụng forEach() để duyệt Mảng.
// let mang = mangSanPham.forEach((sanPham,index) => {
//     console.log(sanPham)
//     return sanPham;
// }
// )

//sử dụng map() lọc phần tử
// let locphantu = mangSanPham.map((sanPham,index) => {
//     if(sanPham.MaSP % 2 === 0){
//         return sanPham;
//     }
    
// })
// console.log(locphantu)

//sử dụng reduce
//Duyệt tính tổng giá trị của các sp trong mảng
// let Tongtien = mangSanPham.reduce((tt,sanPham,index) => {
//     return tt += sanPham.Gia;
// },0) //bắt đầu từ index trong array là 0

// console.log(Tongtien);

//sử dụng hàm reverse() để đảo mảng
// let mangchucai = ['n','i','t'];
// console.log(mangchucai.reverse());


//sort()
// let mangSPTheoTen = mangSanPham.sort((spTiepTheo,sp)=>{
//     let tenSPTieptheo = spTiepTheo.TenSp.toLowerCase();
//     let tenSP = sp.TenSp.toLocaleLowerCase();
//     if(tenSPTieptheo > tenSP){
//         return 1 //Giữ nguyên
//     }if(tenSPTieptheo < tenSP){
//         return -1 //Đảo vị trí
//     }
// })
// console.log(mangSPTheoTen);