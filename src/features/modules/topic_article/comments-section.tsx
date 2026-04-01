import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  ChevronUp,
  ChevronDown,
  Settings,
  Bold,
  Italic,
  List,
  ListOrdered,
  Link2,
  Image,
  Code2,
} from 'lucide-react'
import { useTopicCommentMutation } from '@/features/help-center/pages/contribution/data/queryOptions'
import type { TopicComment } from '@/features/help-center/pages/contribution/data/schema'
import { useQueryClient } from '@tanstack/react-query'


interface CommentsSectionProps {
  articleId: number | null | undefined
  isAuthenticated: boolean
  comments?: TopicComment[]
}

export function CommentsSection({
  articleId,
  isAuthenticated,
  comments = [],
}: CommentsSectionProps) {
  const [commentText, setCommentText] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const { mutate } = useTopicCommentMutation();

  const queryClient = useQueryClient();

  if (!articleId) {
    return null
  }

  const handleSubmitComment = () => {
    if (commentText.length === 0) {
      return;
    }

    mutate({
      comment: commentText.trim(),
      articleId: articleId
    }, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["topicArticle"] });
        setCommentText("");
      }
    });
  }

  return (
    <div className="mt-8 pt-8 border-t-2 border-border">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Comments</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
            </span>
          </div>
        </div>

        {comments.length > 0 && (
          <div className="flex justify-end">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-border rounded px-2 py-1 bg-background"
            >
              <option value="newest">Sort by: Newest</option>
              <option value="oldest">Sort by: Oldest</option>
              <option value="popular">Sort by: Most Popular</option>
            </select>
          </div>
        )}

        {comments.length > 0 && (
          <div className="space-y-6">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="border-b border-border pb-6 last:border-b-0"
              >
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">
                          {comment.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {comment.createdAt}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">
                        {/* {comment.likes > 0 ? `-${comment.likes}` : ''} */}
                      </span>
                    </div>
                    <p className="text-sm mt-2 text-foreground">
                      {comment.comment}
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <button className="p-1 hover:bg-muted rounded">
                        <ChevronUp
                          size={18}
                          className="text-muted-foreground"
                        />
                      </button>
                      <button className="p-1 hover:bg-muted rounded">
                        <ChevronDown
                          size={18}
                          className="text-muted-foreground"
                        />
                      </button>
                      <button className="p-1 hover:bg-muted rounded ml-auto">
                        <Settings size={18} className="text-muted-foreground" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* checking auth */}
        <div className="mt-8 pt-6">
          {isAuthenticated ? (
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="border border-border rounded-lg overflow-hidden shadow-sm">
                    {/* Toolbar - Single Row */}
                    <div className="flex items-center gap-0 px-3 py-2 border-b border-border bg-background">
                      <button
                        className="p-1.5 hover:bg-muted rounded transition-colors"
                        title="Bold"
                      >
                        <Bold size={16} className="text-muted-foreground" />
                      </button>
                      <button
                        className="p-1.5 hover:bg-muted rounded transition-colors"
                        title="Italic"
                      >
                        <Italic size={16} className="text-muted-foreground" />
                      </button>
                      <div className="h-5 border-l border-border mx-1" />
                      <button
                        className="p-1.5 hover:bg-muted rounded transition-colors"
                        title="Bullet list"
                      >
                        <List size={16} className="text-muted-foreground" />
                      </button>
                      <button
                        className="p-1.5 hover:bg-muted rounded transition-colors"
                        title="Numbered list"
                      >
                        <ListOrdered
                          size={16}
                          className="text-muted-foreground"
                        />
                      </button>
                      <div className="h-5 border-l border-border mx-1" />
                      <button
                        className="p-1.5 hover:bg-muted rounded transition-colors"
                        title="Link"
                      >
                        <Link2 size={16} className="text-muted-foreground" />
                      </button>
                      <button
                        className="p-1.5 hover:bg-muted rounded transition-colors"
                        title="Image"
                      >
                        <Image size={16} className="text-muted-foreground" />
                      </button>
                      <button
                        className="p-1.5 hover:bg-muted rounded transition-colors"
                        title="Code"
                      >
                        <Code2 size={16} className="text-muted-foreground" />
                      </button>
                    </div>

                    <textarea
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Share your thoughts..."
                      className="w-full p-3 min-h-36 resize-none focus:outline-none bg-background text-base leading-relaxed"
                    />
                  </div>

                  <div className="flex justify-end mt-3 mb-5">
                    <Button
                      onClick={handleSubmitComment}
                      disabled={!commentText.trim()}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 font-semibold"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 bg-muted/20 rounded-lg">
              <p className="text-muted-foreground text-base">
                Please{' '}
                <a
                  href="/auth/login"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  sign in
                </a>{' '}
                to leave a comment.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
