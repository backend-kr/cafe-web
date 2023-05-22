import { Box, Typography } from '@mui/material';
import { useTransition, animated } from 'react-spring';
import { styled } from '@mui/system';

const StyledScrollbar = styled(Box)(({ theme }) => ({
  overflowX: 'auto',
  scrollBehavior: 'smooth',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

function Category() {
  const categories = ['서울', '경기도', '부산', '강원도', '제주', '테스트', '테스트1'];

  const transitions = useTransition(categories, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(100%)' },
    config: { tension: 220, friction: 20 },
  });

  return (
    <StyledScrollbar
      sx={{
        display: 'flex',
        flexDirection: 'row',
        my: 2,
        overflowX: 'auto',
        scrollBehavior: 'smooth',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
    >
      {transitions((style, category, _, index) => (
        <animated.div
          key={index}
          style={{
            ...style,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: index === 0 ? 'rgb(94, 223, 255)' : 'rgb(38, 50, 56)',
            borderRadius: '4.42653226852417px',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '14px',
            margin: '3px 8px', // 위아래 여백을 8px로 설정
            minWidth: `${category.length * 15}px`, // 박스의 최소 너비를 글자 수에 맞게 설정
            padding: '8px 16px', // 내부 여백을 8px 위아래, 16px 좌우로 설정
            transition: 'background-color 0.3s ease-in-out',
            cursor: 'pointer',
          }}
        >
          <Typography variant="body1">{category}</Typography>
        </animated.div>
      ))}
    </StyledScrollbar>
  );
}

export default Category;
