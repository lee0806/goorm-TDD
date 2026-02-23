# React TDD 학습 레포지토리

Vitest와 React Testing Library를 활용한 컴포넌트 테스트 및 TDD 방식 개발을 실습한 학습용 레포지토리입니다. Todo, OrderProduct, button/board/parent-child 등 다양한 예제를 통해 테스트 코드 작성 방법과 TDD 사이클을 이해했습니다.

## 기술 스택

- **React**
- **Vitest**
- **React Testing Library**
- **Zustand**
- **Material-UI**

---

## 📌 학습 목표

- Vitest + React Testing Library를 활용한 컴포넌트 단위 테스트 작성
- TDD(Test-Driven Development) 사이클 이해 및 실습
- 전역 상태관리 도구(Zustand) 적용

---

## 📚 개념

### TDD 사이클 (Red → Green → Refactor)
```
1. Red      — 실패하는 테스트를 먼저 작성
2. Green    — 테스트를 통과시키는 최소한의 코드 작성
3. Refactor — 테스트가 통과된 상태에서 코드 개선
```
---


### RTL 쿼리 우선순위

| 우선순위 | 쿼리 | 사용 상황 |
|---|---|---|
| 1 | `getByRole` | 버튼, 체크박스, 헤딩 등 — 기본값 |
| 2 | `getByLabelText` | label과 연결된 폼 필드 |
| 3 | `getByText` | 순수 텍스트 콘텐츠 확인 |
| 추천 안함 | `getByTestId` | 위 방법이 불가능한 경우만 |
```jsx

// 1. 추천
screen.getByRole('button', { name: /제출/i })

// 2. 차선책
screen.getByText('제출')

// 3. 권장하지 않음
screen.getByTestId('submit-btn')
```

### Zustand vs Context API

| | Zustand | Context API |
|---|---|---|
| 설치 | 외부 라이브러리 | React 내장 |
| 코드량 | 적음 | Provider + createContext + useContext |
| 리렌더링 | 구독한 값이 변경될 때만 | Provider 하위 전체 |
| 적합한 상황 | 복잡한 전역 상태 | 테마, 언어 등 단순한 값 |

---
