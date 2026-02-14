import { useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Button,
} from "@mui/material";

interface Post {
  id: number;
  title: string;
  author: string;
  description: string;
  date: string;
  views: number;
}

export default function Board() {
  const posts: Post[] = [
    {
      id: 1,
      title: "오늘 저녁 추천 메뉴는 무엇일까요?",
      author: "김철수",
      description: "김치찌개입니다.",
      date: "2026-02-12",
      views: 10,
    },
    {
      id: 2,
      title: "어제 본 영화 후기입니다.",
      author: "이영희",
      description: "아바타를 봤어요. 너무 재밌었습니다.",
      date: "2026-02-11",
      views: 25,
    },
    {
      id: 3,
      title: "여자친구를 어디서 만나야되나요?",
      author: "박민수",
      description: "여자친구를 사귀고 싶은데 어떻게 만나야할지 모르겠어요 ㅜㅜ",
      date: "2026-02-10",
      views: 15,
    },
    {
      id: 4,
      title: "JS가 너무 어려워요.",
      author: "최지우",
      description: "프론트엔드 개발자가 되고 싶은데 JS가 너무 어렵습니다.",
      date: "2026-02-09",
      views: 8,
    },
    {
      id: 5,
      title: "할일이 너무 밀려있어요 ㅜㅜ",
      author: "정하나",
      description: "3일전부터 쉬었더니 할일이 너무 밀렸어요 ㅜㅜ",
      date: "2026-02-08",
      views: 20,
    },
  ];

  const [selectedPost, setSelectedPost] = useState<Post | null>(null); // 선택된 게시판 상태
  const [open, setOpen] = useState(false); // 모달 창이 열려 있는지 상태

  const handleModalOpen = (post: Post) => {
    // 모달 창 열기 함수
    setSelectedPost(post);
    setOpen(true);
  };
  const handleModalClose = () => {
    // 모달 창 닫기 함수
    setSelectedPost(null);
    setOpen(false);
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        게시판
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell align="center" width="20%">
                번호
              </TableCell>
              <TableCell align="center" width="20%">
                제목
              </TableCell>
              <TableCell align="center" width="15%">
                작성자
              </TableCell>
              <TableCell align="center" width="25%">
                작성일
              </TableCell>
              <TableCell align="center" width="20%">
                조회수
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post) => (
              <TableRow
                key={post.id}
                hover
                onClick={() => handleModalOpen(post)}
              >
                <TableCell align="center">{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell align="center">{post.author}</TableCell>
                <TableCell align="center">{post.date}</TableCell>
                <TableCell align="center">{post.views}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleModalClose}>
        {selectedPost && (
          <>
            <DialogTitle>{selectedPost.title}</DialogTitle>
            <DialogContent>
              <Box sx={{ marginBottom: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  작성자: {selectedPost.author}
                </Typography>
                <Typography sx={{ whiteSpace: "pre-wrap", marginTop: 2 }}>
                  {selectedPost.description}
                </Typography>
              </Box>
            </DialogContent>

            <Button onClick={handleModalClose}>닫기</Button>
          </>
        )}
      </Dialog>
    </Container>
  );
}
