import React from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

const ContactList = () => {

    const contactList = useSelector((state)=>state.contactList);
    const [keyword, setKeyword] = useState('');

    useEffect(()=>{
        
    }, [keyword]);

  return (
    <div>
        <SearchBox setKeyword={setKeyword}></SearchBox>
        <p className="number-text">num: {contactList.filter(item => !keyword || item.name.includes(keyword)).length} </p>
        {
            contactList.map((item, index)=>{
                // 키워드가 빈 문자열인 경우 전체 아이템을 렌더링
                if (!keyword) {
                    return <ContactItem key={index} item={item} />;
                }

                // 아이템의 이름 또는 전화번호에 키워드가 포함된 경우에만 렌더링
                if (item.name.includes(keyword) || item.phoneNumber.includes(keyword)) {
                    return <ContactItem key={index} item={item} />;
                }

                // 위의 조건에 해당하지 않으면 아이템을 렌더링하지 않음
                return null;
            })
        }
    </div>
  )
}

export default ContactList