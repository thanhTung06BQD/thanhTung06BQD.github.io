function hien_dap_an(a,b){dap_an_dung=b[a-1];var c=0;for(c=0;c<dap_an_dung.length;c++)document.getElementById("cau_"+String(c+1)+"_dap_an_"+dap_an_dung[c]).style.background="blue"}function kiem_tra(a,b){dap_an_dung=b[a-1],w3.hide("#xac_nhan_nop_bai"),w3.show("#hien_dap_an"),w3.hide("#quay_lai");var c=0,d=0;for(d=0;d<dap_an_dung.length;d++)dap_an_nguoi_choi_chon[d]==dap_an_dung[d]&&(c+=1),document.getElementById("cau_"+String(d+1)+"_dap_an_"+dap_an_dung[d]).style.background="blue";document.getElementById("diem_thi").innerHTML="\u0110i\u1ec3m: "+String(10*c/dap_an_dung.length),nop_bai=1}function click_dap_an(a,b){dap_an_nguoi_choi_chon[parseInt(b)-1]==a?(document.getElementById("cau_"+b+"_dap_an_"+a).style.background="white",dap_an_nguoi_choi_chon[parseInt(b)-1]="f"):("f"!=dap_an_nguoi_choi_chon[parseInt(b)-1]&&(document.getElementById("cau_"+b+"_dap_an_"+dap_an_nguoi_choi_chon[parseInt(b)-1]).style.background="white"),document.getElementById("cau_"+b+"_dap_an_"+a).style.background="pink",dap_an_nguoi_choi_chon[parseInt(b)-1]=a)}function nop_bai_thi(){w3.hide("#nop_bai_thi"),w3.show("#xac_nhan_nop_bai"),w3.show("#quay_lai")}function quay_lai(){w3.hide("#xac_nhan_nop_bai"),w3.hide("#quay_lai"),w3.show("#nop_bai_thi")}function baogio(){num=document.the_form.kq.value,phut=document.the_form.kq2.value,num=eval(num)+1,60==num&&(phut=eval(phut)+1,num=0),document.the_form.kq.value=num,document.the_form.kq2.value=phut,0==nop_bai&&(hengio=setTimeout("baogio();",1e3))}function bat_dau_thi(){w3.hide("#bat_dau_thi"),baogio()}var nop_bai=0;
